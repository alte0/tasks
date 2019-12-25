import React from "react";
import PropTypes from "prop-types";
import "./task.scss";
import {hasDateExpired} from "../../helpers/helpers"

export function Task(props) {
    const {
        isShowDesc,
        isMore,
        data
    } = props;
    const {
        dateEnd,
        title,
        desc,
        dateStart,
        status,
        author,
        executor,
        } = data;
    return (
        <section className={`task ${hasDateExpired(dateEnd) ? `task_expired` : ``} ${isShowDesc ? `task_single` : ''}`}>
            <h3 className="task__title">{title}</h3>
            <div className="task__desc">
                {
                    isShowDesc ?
                    <p>{desc}</p>
                        :
                        ""
                }
            </div>
            <footer className="task__footer">
                <div className="task__date-start">Начало задачи: {dateStart}
                </div>
                <div className="task__date-end">Закончить задачу до: {dateEnd}
                </div>
                <div className="task__status">Статус: {status}
                </div>
                <div className="task__execute">
                    <button>Выполнить задачу</button>
                </div>
                <div className="task__author">Назначил: {author}
                </div>
                <div className="task__executor">Испонитель: {executor}
                </div>
            </footer>
            {
                isMore ?
                    <a href="/?taskId=1">Подробнее</a>
                    : ''
            }
        </section>
    )
}
Task.propTypes = {
    isShowDesc: PropTypes.bool.isRequired,
    isMore: PropTypes.bool.isRequired,
    data: PropTypes.shape({
        dateEnd: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        dateStart: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        executor: PropTypes.string.isRequired
    })
};
export default Task


