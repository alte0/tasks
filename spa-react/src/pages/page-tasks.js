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
import { withRouter } from "react-router-dom";

const getTextInSearchParams = (location) => {
    const { search } = location;
    const searchParams = new URLSearchParams(search);
    return  searchParams.get("q");
}

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
        const { url } = this.props.match;

        if (url === '/search') {
            const textSearch =  getTextInSearchParams(this.props.location);
            this._getSearchData(textSearch);
        } else {
            const dataFunc = this._getFuncData(url);
            this._getData(dataFunc);
        }
    }

    //TODO - уточнить про пропсы.
    shouldComponentUpdate(nextProps) {
        const { url: currUrl } = this.props.match;
        const { url: nextUrl } = nextProps.match;

        const isUpdate = (currUrl !== nextUrl) && (nextUrl !== '/search');

        if (isUpdate) {
            const dataFunc = this._getFuncData(nextUrl);
            this._getData(dataFunc);
            return true;

        }

        const textSearchCurr =  getTextInSearchParams(this.props.location);
        const textSearchNext =  getTextInSearchParams(nextProps.location);
        const isPageSearch = (currUrl === '/search') || (nextUrl === '/search');

        if (isPageSearch && (textSearchCurr !== textSearchNext)) {
            this._getSearchData(textSearchNext);
            return true;
        }

        return true;
    }

    render() {
        if (!checkLoggedUser()) {
            return (<Redirect to="/sing-in" />)
        }

        const {
            tasks,
            user,
            match,
            location
        } = this.props;

        const { url } = match;

        const { userId } = user;
        const urlOrigin=`${window.location.origin}${location.search}`;

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

    _getSearchData(textSearch) {
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PageTasks));
