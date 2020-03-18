import React, { Component } from "react";
import Task from "../components/task/task"
import UserMenu from "../components/user-menu/user-menu";
import { Redirect } from "react-router-dom";
import LoadingData from '../components/loading-data/loading-data';
import { getTask } from "../data/data";
import { TypeMessage, showMessage } from '../plugins/show-message';

const option = {
    isMore: false,
    isShowDesc: true
};

class PageTask extends Component {
    constructor(props){
        super(props);
        this.initialState = {
            task: null,
            loading: true
        };
        this.state = this.initialState;
    }

    componentDidMount() {
        const idTask = this.props.idTask;
        
        getTask(idTask)
            .then(task => {
                if (task.msgsType === 'error') {
                    this.setState({
                        task: this.initialState.task
                    })
                    return true;
                }
                
                this.setState({task});
            })
            .catch(e => {
                console.error(e);
                showMessage(TypeMessage.ERROR, e, 'Ошибка получения данных.');
            })
            .finally(() => {
                this.setState({ loading: false });
            });
    }

    render() {
        const { isLoggedIn } = this.props;

        if (!isLoggedIn) {
            return (<Redirect to="/sing-in" />)
        }

        const {
            user,
            handleClickExit,
            url,
        } = this.props;
        
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
                        this.state.task ?
                            <Task
                                isMore={option.isMore}
                                isShowDesc={option.isShowDesc}
                                task={this.state.task}
                                isShowLinkExecute={this.isShowLinkExecute}
                                handleClickExecuteTask={this.handleClickExecuteTask}
                            /> :
                            <p>Такая задача не существует!</p>
                }
            </React.Fragment>
        )
    }
};

export default PageTask
