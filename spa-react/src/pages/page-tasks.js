import React, { Component } from "react";
// import SearchByTasks from "../components/search-by-tasks/search-by-tasks";
import UserMenu from "../components/user-menu/user-menu";
import Tasks from "../components/tasks/tasks";
import Pagination from "../components/pagination/pagination";
import { getActiveTitleTasks, changeStatusTaskAndDel } from "../helpers/helpers";
import { Redirect } from "react-router-dom";
import { getMyTasks, getMyTasksDone, getDesignatedTasks, getDesignatedTasksDone, executeTask } from "../data/data";
import { TypeMessage, showMessage } from '../plugins/show-message';
import LoadingData from '../components/loading-data/loading-data';

class PageTasks extends Component {
    constructor(props){
        super(props);
        this.initialState = {
            tasks: [],
            itemsTasks: 9,
            pagesCount: 0,
            pageCurrentPagination: 1,
            loading: false,
        };
        this.state = this.initialState;

        this._handleClickExecuteTask = this._handleClickExecuteTask.bind(this); 
        this._handleClickChangePagePagination = this._handleClickChangePagePagination.bind(this);

    }

    componentDidMount() {
        const dataFunc = this._getFuncData(this.props.url);
        this._getData(dataFunc);
    }

    componentDidUpdate(prevProps) {
        if (this.props.url !== prevProps.url) {
            const dataFunc = this._getFuncData(this.props.url);
            this._getData(dataFunc);
        }
    }

    render() {
        const { isLoggedIn } = this.props;

        if (!isLoggedIn) {
            return (<Redirect to="/sing-in" />)
        }

        const {
            user,
            // textSearch,
            handleClickExit,
            // handleChangeTextSearch,
            // handleSubmitFormSearch,
            url
        } = this.props;

        const {
            tasks,
            pageCurrentPagination,
            itemsTasks,
            pagesCount
         } = this.state;
        const visibleTasks = tasks.length ? tasks.slice((pageCurrentPagination - 1) * itemsTasks, pageCurrentPagination * itemsTasks) : tasks;
        const isShowLinkExecute = url === "/" ? true : false;

        return (
            <React.Fragment>
                <UserMenu
                    handleClickExit={handleClickExit}
                    user={user}
                    url={url}
                />
                {
                    this.state.loading ?
                        <LoadingData /> :
                        <React.Fragment>
                            {/* <SearchByTasks
                    textSearch={textSearch}
                    handleChangeTextSearch={handleChangeTextSearch}
                    handleSubmitFormSearch={handleSubmitFormSearch}
                    /> */}
                            <Tasks
                                tasks={visibleTasks}
                                title={getActiveTitleTasks(url)}
                                isShowLinkExecute={isShowLinkExecute}
                                handleClickMore={(evt) => {
                                    evt.preventDefault();
                                    console.log('handleClickMore');
                                }}
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
            tasks: []
        });

        fn()
            .then(tasks => {
                if (tasks.msgsType === 'error') {
                    this.setState({
                        tasks: []
                    })
                    return true
                }

                const lengthTasks = tasks.length;

                this.setState((state) => {
                    const { itemsTasks } = state;

                    return {
                        tasks: tasks,
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
                        this.setState((state) => {

                            return {
                                tasks: changeStatusTaskAndDel(state.tasks, idTask),
                            }
                        })

                        return true
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
};

export default PageTasks