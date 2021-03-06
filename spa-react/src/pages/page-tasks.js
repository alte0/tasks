import React, { Component } from "react";
import SearchByTasks from "../components/search-by-tasks/search-by-tasks";
import UserMenu from "../components/user-menu/user-menu";
import Tasks from "../components/tasks/tasks";
import Pagination from "../components/pagination/pagination";
import {
    getActiveTitleTasks,
    deleteTaskFromArrTasks,
    getTextInSearchParams
} from "../helpers/helpers";
import { apiFetch } from "../api/api-fetch";
import { TypeMessage, showMessage } from '../plugins/show-message';
import LoadingData from '../components/loading-data/loading-data';
import { connect } from "react-redux";
import { allTasks } from "../actions";
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types'

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

    shouldComponentUpdate(nextProps, nextState) {
        const { tasks } = this.props;
        const { tasks: nextTasks } = nextProps;
        const { url: currUrl } = this.props.match;
        const { url: nextUrl } = nextProps.match;
        // страница с задачами
        const isNotPageSearch = (currUrl !== nextUrl) && (nextUrl !== '/search');
        // страница с поиском
        const isPageSearch = (currUrl === '/search') || (nextUrl === '/search');
        // изменение поискового текста
        const textSearchCurr = getTextInSearchParams(this.props.location);
        const textSearchNext = getTextInSearchParams(nextProps.location);
        const isChangeTextSearch = textSearchCurr !== textSearchNext;
        // загрузка данных/изменение текущей страницы в пагинации/изменения при выполнении задачи.
        const isLoading = nextState.loading !== this.state.loading;
        const isChangeCurrentPagination = nextState.pageCurrentPagination !== this.state.pageCurrentPagination;
        const isChangeTasksLength = tasks.length !== nextTasks.length

        if (isNotPageSearch) {
            const dataFunc = this._getFuncData(nextUrl);
            this._getData(dataFunc);
            return true;
        }

        if (isPageSearch && isChangeTextSearch) {
            this._getSearchData(textSearchNext);
            return true;
        }

        return isLoading || isChangeCurrentPagination || isChangeTasksLength;
    }

    render() {
        const {
            tasks,
            user,
            match,
            location
        } = this.props;

        const { url } = match;
        const { userId } = user;
        const textSearch = getTextInSearchParams(location);

        const {
            pageCurrentPagination,
            itemsTasks,
            pagesCount
         } = this.state;

        const visibleTasks = tasks.length ?
            tasks.slice((pageCurrentPagination - 1) * itemsTasks, pageCurrentPagination * itemsTasks) :
            tasks;

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
                return apiFetch.getMyTasksDone
            case "/designated-tasks":
                return apiFetch.getDesignatedTasks
            case "/designated-tasks-done":
                return apiFetch.getDesignatedTasksDone
            default:
                return apiFetch.getMyTasks
        }
    }

    _handleClickExecuteTask(evt) {
        const idTask = evt.target.dataset.idTask;
        const title = evt.target.dataset.title;

        const isQuestion = window.confirm(`Вы хотите выполнить задачу - ${title}?`)

        if (isQuestion) {
            apiFetch.executeTask(idTask)
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
        apiFetch.getResultSearchText(textSearch)
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

PageTasks.propTypes  = {
    tasks: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PageTasks));
