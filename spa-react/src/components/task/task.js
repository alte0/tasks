import React from "react";
import PropTypes from "prop-types";
import "./task.scss";
import {hasDateExpired} from "../../helpers/helpers"

export function Task(props) {
    return (
        <section className={`task ${hasDateExpired(props.data.dateEnd) ? `task_expired` : ``} ${props.isShowDesc ? `task_single` : ''}`}>
            <h3 className="task__title">{props.data.title}</h3>
            <div className="task__desc">
                {
                    props.isShowDesc ?
                    <p>{props.data.desc}</p>
                        :
                        ""
                }
            </div>
            <footer className="task__footer">
                <div className="task__date-start">Начало задачи: {props.data.dateStart}
                </div>
                <div className="task__date-end">Закончить задачу до: {props.data.dateEnd}
                </div>
                <div className="task__status">Статус: {props.data.status}
                </div>
                <div className="task__execute">
                    <button>Выполнить задачу</button>
                </div>
                <div className="task__author">Назначил: {props.data.author}
                </div>
                <div className="task__executor">Испонитель: {props.data.executor}
                </div>
            </footer>
            {
                props.isMore ?
                    <a href="/?taskId=1">Подробнее</a>
                    : ''
            }
        </section>
    )
}
Task.propTypes = {
    isShowDesc: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired,
    isMore: PropTypes.bool.isRequired
};
export default Task


