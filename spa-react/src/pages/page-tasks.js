import React, { Component } from "react";
// import SearchByTasks from "../components/search-by-tasks/search-by-tasks";
import UserMenu from "../components/user-menu/user-menu";
import Tasks from "../components/tasks/tasks";
import Pagination from "../components/pagination/pagination";
import { getActiveTitleTasks } from "../helpers/helpers";
import { Redirect } from "react-router-dom";
import { getMyTasks, getMyTasksDone, getDesignatedTasks, getDesignatedTasksDone } from "../data/data";
import { TypeMessage, showMessage } from '../plugins/show-message';

class PageTasks extends Component {
    constructor(props){
        super(props);
        this.initialState = {
            tasks: [],
            itemsTasks: 1,
            pagesCount: 0,
            pageCurrentPagination: 1,
            loading: false,
        };
        this.state = this.initialState;
    }

    componentDidMount() {
        const dataFunc = this._getFuncData(this.props.url);
        this._getData(dataFunc);
    }

    render() {
        const { isLoggedIn } = this.props;

        if (!isLoggedIn) {
            return (<Redirect to="/sing-in" />)
        }

        console.log(this.props);

        const {
            user,
            // textSearch,
            handleClickExit,
            // handleChangeTextSearch,
            // handleSubmitFormSearch,
            url,
            isShowLinkExecute
        } = this.props;

        const {
            tasks,
            pageCurrentPagination,
            itemsTasks,
            pagesCount
         } = this.state;
        const visibleTasks = tasks.length ? tasks.slice((pageCurrentPagination - 1) * itemsTasks, pageCurrentPagination * itemsTasks) : tasks;

        return (
            <React.Fragment>
                <UserMenu
                    handleClickExit={handleClickExit}
                    user={user}
                    url={url}
                />
                {/* <SearchByTasks
                    textSearch={textSearch}
                    handleChangeTextSearch={handleChangeTextSearch}
                    handleSubmitFormSearch={handleSubmitFormSearch}
                    /> */}
                <Tasks
                    tasks={visibleTasks}
                    title={getActiveTitleTasks(url)}
                    isShowLinkExecute={isShowLinkExecute}
                    handleClickMore={this.props.handleClickMore}
                    handleClickExecuteTask={this.props.handleClickExecuteTask}
                />
                {
                    tasks.length > itemsTasks ?
                        <Pagination
                            pagesCount={pagesCount}
                            pageCurrentPagination={pageCurrentPagination}
                            handleClickChangePagePagination={this.props.handleClickChangePagePagination}
                        />
                        :
                        null
                }
            </React.Fragment>
        )
    }

    _getData(fn) {
        // this.setState({
        //     loading: true,
        //     tasks: []
        // });

        fn()
            .then(tasks => {
                console.log(tasks);
                // if (tasks.msgsType === 'error') {
                //     this.setState({
                //         tasks: []
                //     })
                //     return true
                // }

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
            });
            // .finally(() => {
            //     this.setState({ loading: false });
            // });
    }

    _getFuncData(url) {
        switch (url) {
            case "/":
                return getMyTasks
            case "my-tasks-done":
                return getMyTasksDone
            case "designated-tasks":
                return getDesignatedTasks
            case "designated-tasks-done":
                return getDesignatedTasksDone
        }
    }
};

export default PageTasks