import React from "react";
import PropTypes from "prop-types";
import "./task.scss";
import {hasDateExpired} from "../../helpers/helpers";
import dompurify from 'dompurify';

const sanitizer = dompurify.sanitize;

const renderDesc = (isShow, stringAndTags) => {
    return isShow ? sanitizer(stringAndTags) : "";
}

const getTaskContent = (props) => {
    const {
        isShowDesc,
        isMore,
        task,
        isShowLinkExecute
    } = props;
    const {
        task_date_end,
        task_title,
        task_desc,
        task_date_start,
        task_status,
        task_date_no_limit,
        task_id,
        author_name,
        author_surname,
        author_patronymic,
        executor_name,
        executor_patronymic,
        executor_surname
    } = task;
    
    return (
        <React.Fragment>
            <h3 className="task__title">{task_title}</h3>
            <div 
                className="task__desc"
                dangerouslySetInnerHTML={{ __html: renderDesc(isShowDesc, task_desc) }}
                >
            </div>
            <footer className="task__footer">
                <div className="task__date-start">Начало задачи: {task_date_start}
                </div>
                <div className="task__date-end">Закончить задачу до: {Number(task_date_no_limit) === 1 ? 'без даты окончания' : task_date_end}
                </div>
                <div className="task__status">Статус: {Number(task_status) ? 'Выполнено.': 'В работе.'}
                </div>
                <div className="task__execute">
                    {
                        !Number(task_status) && isShowLinkExecute
                            ? <button
                                data-id-task={task_id}
                                data-title={task_title}
                                onClick={props.handleClickExecuteTask}
                            >Выполнить задачу</button>
                            : ""
                    }
                </div>
                <div className="task__author">Назначил: {author_surname} {author_name} {author_patronymic}
                </div>
                <div className="task__executor">Испонитель: {executor_surname} {executor_name} {executor_patronymic}
                </div>
            </footer>
            {
                isMore ?
                    <a
                        className="link"
                        data-id={task_id}
                        onClick={props.handleClickMore}
                        href={`/?taskId=${task_id}`}>Подробнее</a>
                    : ''
            }
        </React.Fragment>
    )
}

export const Task = (props) => {
    const {
        isShowDesc,
        isTasks,
        task
    } = props;
    const {
        task_date_end,
        task_date_no_limit
    } = task;

    if (isTasks) {
            return (
                getTaskContent(props)
            )
        }

    const classTaskExpired = hasDateExpired(task_date_end) && Number(task_date_no_limit) === 0 ? `task_expired` : ``;

    return (
        <section className={`task ${classTaskExpired} ${isShowDesc ? `task_single` : ''}`}>
            {getTaskContent(props)}
        </section>
    )
}

Task.propTypes = {
    isShowDesc: PropTypes.bool.isRequired,
    isMore: PropTypes.bool.isRequired,
    task: PropTypes.shape({
        task_date_end: PropTypes.string.isRequired,
        task_title: PropTypes.string.isRequired,
        task_date_start: PropTypes.string.isRequired,
        task_status: PropTypes.string.isRequired,
        author_name: PropTypes.string.isRequired,
        executor_name: PropTypes.string.isRequired,
        task_id: PropTypes.string.isRequired
    }).isRequired,
    handleClickMore: PropTypes.func
};

export default Task
