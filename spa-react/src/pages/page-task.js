import React, { Component } from "react";
import Task from "../components/task/task"
import UserMenu from "../components/user-menu/user-menu";
import { Redirect } from "react-router-dom";
import LoadingData from '../components/loading-data/loading-data';
import { getTask, executeTask } from "../data/data";
import { TypeMessage, showMessage } from '../plugins/show-message';
import { checkLoggedUser } from "../helpers/helpers";
import {connect} from "react-redux";
import { fetchTask, toPerformTask } from "../actions";


const option = {
    isMore: false,
    isShowDesc: true
};

class PageTask extends Component {
    constructor(props){
        super(props);
        this.initialState = {
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
                    this.props.fetchTaskDispatch(null);
                }

                this.props.fetchTaskDispatch(task);
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
            task
        } = this.props;

        const { userId } = user;

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
                        task ?
                            <Task
                                isMore={option.isMore}
                                isShowDesc={option.isShowDesc}
                                task={task}
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
                        this.props.executeTaskDispatch(this.props.task);
                    }
                })
                .catch(e => {
                    console.error(e);
                    showMessage(TypeMessage.ERROR, e, 'Произошла ошибка.');
                });
        }
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        task: state.task
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTaskDispatch: (task) => {
            dispatch(fetchTask(task));
        },
        executeTaskDispatch: (task) => {
            dispatch(toPerformTask(task));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageTask);
