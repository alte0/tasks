import React, { Component } from "react";
import Task from "../components/task/task"
import UserMenu from "../components/user-menu/user-menu";
import { Redirect } from "react-router-dom";
import LoadingData from '../components/loading-data/loading-data';
import { getTask, executeTask } from "../data/data";
import { TypeMessage, showMessage } from '../plugins/show-message';
import { changeStatusTask, checkLoggedUser } from "../helpers/helpers";

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

        this._handleClickExecuteTask = this._handleClickExecuteTask.bind(this);
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
        if (!checkLoggedUser()) {
            return (<Redirect to="/sing-in" />)
        }

        const {
            user,
            handleClickExit,
            url,
        } = this.props;

        const {userId} = user;

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
                                userId={userId}
                                handleClickExecuteTask={this._handleClickExecuteTask}
                            /> :
                            <p>Такая задача не существует!</p>
                }
            </React.Fragment>
        )
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
                        this.setState((state) => (
                            {
                                task: changeStatusTask(state.task),
                            }
                        ))

                        return true
                    }
                })
                .catch(e => {
                    console.error(e);
                    showMessage(TypeMessage.ERROR, e, 'Произошла ошибка.');
                });
        }
    }
}

export default PageTask
