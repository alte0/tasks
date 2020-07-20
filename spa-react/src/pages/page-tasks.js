import React, { Component } from "react";
import SearchByTasks from "../components/search-by-tasks/search-by-tasks";
import UserMenu from "../components/user-menu/user-menu";
import Tasks from "../components/tasks/tasks";
import Pagination from "../components/pagination/pagination";
import { getActiveTitleTasks, deleteTaskFromArrTasks, decodeParamsSearchUrl, checkLoggedUser } from "../helpers/helpers";
import { Redirect } from "react-router-dom";
import { getMyTasks, getMyTasksDone, getDesignatedTasks, getDesignatedTasksDone, executeTask, getResultSearchText } from "../data/data";
import { TypeMessage, showMessage } from '../plugins/show-message';
import LoadingData from '../components/loading-data/loading-data';
import { connect } from "react-redux";
import { allTasks } from "../actions";

class PageTasks extends Component {
    constructor(props){
        super(props);
        this.initialState = {
            itemsTasks: 9,
            pagesCount: 0,
            pageCurrentPagination: 1,
            loading: true,
        };
        this.state = this.initialState;

        this._handleClickExecuteTask = this._handleClickExecuteTask.bind(this);
        this._handleClickChangePagePagination = this._handleClickChangePagePagination.bind(this);
    }

    componentDidMount() {
        const { url } = this.props;

        if (url === '/search') {
            this._getSearchData();
        } else {
            const dataFunc = this._getFuncData(url);
            this._getData(dataFunc);
        }
    }

    componentDidUpdate(prevProps) {
        const { url, urlOrigin } = this.props;

        if ((url !== '/search') && (url !== prevProps.url)) {
            const dataFunc = this._getFuncData(url);
            this._getData(dataFunc);
        }

        if ((url === '/search') && (urlOrigin !== prevProps.urlOrigin)) {
            this._getSearchData();
        }
    }

    render() {
        if (!checkLoggedUser()) {
            return (<Redirect to="/sing-in" />)
        }

        const {
            tasks,
            url,
            urlOrigin,
            user
        } = this.props;

        const { userId } = user;

        const textSearch = decodeParamsSearchUrl(urlOrigin);

        const {
            pageCurrentPagination,
            itemsTasks,
            pagesCount
         } = this.state;
        const visibleTasks = tasks.length ? tasks.slice((pageCurrentPagination - 1) * itemsTasks, pageCurrentPagination * itemsTasks) : tasks;

        return (
            <React.Fragment>
                <UserMenu
                    url={url}
                />
                {
                    this.state.loading ?
                        <LoadingData /> :
                        <React.Fragment>
                            <SearchByTasks
                                textSearch={textSearch}
                            />
                            <Tasks
                                tasks={visibleTasks}
                                title={getActiveTitleTasks(url, textSearch)}
                                userId={userId}
                                handleClickExecuteTask={this._handleClickExecuteTask}
                            />
                            {
                                tasks.length > itemsTasks ?
                                    <Pagination
                                        pagesCount={pagesCount}
                                        pageCurrentPagination={pageCurrentPagination}
                                        handleClickChangePagePagination={this._handleClickChangePagePagination}
                                    />
                                    :
                                    null
                            }
                        </React.Fragment>
                }
            </React.Fragment>
        )
    }

    _getData(fn) {
        this.setState({
            loading: true,
            pageCurrentPagination: this.initialState.pageCurrentPagination
        });

        fn()
            .then(tasks => {
                if (tasks.msgsType === 'error') {
                    this.props.getTasksDispatch([])
                    return true
                }

                this.props.getTasksDispatch(tasks);

                const lengthTasks = tasks.length;

                this.setState((state) => {
                    const { itemsTasks } = state;

                    return {
                        pagesCount: Math.ceil((lengthTasks / itemsTasks))
                    }
                });
            })
            .catch(e => {
                console.error(e);
                showMessage(TypeMessage.ERROR, e, 'Ошибка получения данных.');
            })
            .finally(() => {
                this.setState({ loading: false });
            });
    }

    _getFuncData(url) {
        switch (url) {
            case "/my-tasks-done":
                return getMyTasksDone
            case "/designated-tasks":
                return getDesignatedTasks
            case "/designated-tasks-done":
                return getDesignatedTasksDone
            default:
                return getMyTasks
        }
    }

    _handleClickExecuteTask(evt) {
        const idTask = evt.target.dataset.idTask;
        const title = evt.target.dataset.title;

        const isQuestion = window.confirm(`Вы хотите выполнить задачу - ${title}?`)

        if (isQuestion) {
            executeTask(idTask)
                .then(result => {
                    showMessage(result.msgsType, '', result.textMsgs);
                    if (result.msgsType === 'success') {
                        const newTasks = deleteTaskFromArrTasks(this.props.tasks, idTask);

                        this.props.getTasksDispatch(newTasks);
                    }
                })
                .catch(e => {
                    console.error(e);
                    showMessage(TypeMessage.ERROR, e, 'Произошла ошибка.');
                });
        }
    }

    _handleClickChangePagePagination(evt) {
        evt.preventDefault();
        this.setState({
            pageCurrentPagination: +evt.target.dataset.pageIdPag
        });
    }

    _getSearchData() {
        const textSearch = decodeParamsSearchUrl(this.props.urlOrigin) || '';

        getResultSearchText(textSearch)
            .then(tasks => {
                if (tasks.msgsType === 'warning') {
                    this.props.getTasksDispatch([]);
                    this.setState({
                        pageCurrentPagination: this.initialState.pageCurrentPagination
                    })
                    return true
                }

                this.props.getTasksDispatch(tasks);

                const lengthTasks = tasks.length;

                this.setState((state) => {
                    const { itemsTasks } = state;

                    return {
                        pagesCount: Math.ceil((lengthTasks / itemsTasks))
                    }
                })
            })
            .catch(e => {
                console.error(e);
                showMessage(TypeMessage.ERROR, e, 'Ошибка получения данных.');
            })
            .finally(() => {
                this.setState({ loading: false });
            });
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    tasks: state.tasks
})

const mapDispatchToProps = (dispatch) => {
    return {
        getTasksDispatch: (tasks) => {
            dispatch(allTasks(tasks));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageTasks);
