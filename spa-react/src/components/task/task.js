import React from "react";
import PropTypes from "prop-types";
import "./task.scss";
import {hasDateExpired} from "../../helpers/helpers"

export const Task = (props) => {
    const {
        isShowDesc,
        isMore,
        isTasks,
        task
    } = props;
    const {
        dateEnd,
        title,
        desc,
        dateStart,
        status,
        author,
        executor,
        id
        } = task;

    if (isTasks) {
            return (
                <React.Fragment>
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
                            <a
                                className="link"
                                data-id={id}
                                onClick={props.handleClickMore}
                                href={`/?taskId=${id}`}>Подробнее</a>
                            : ''
                    }
                </React.Fragment>
            )
        }
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
                    <a
                        className="link"
                        data-id={id}
                        onClick={props.handleClickMore}
                        href={`/?taskId=${id}`}>Подробнее</a>
                    : ''
            }
        </section>
    )
}

Task.propTypes = {
    isShowDesc: PropTypes.bool.isRequired,
    isMore: PropTypes.bool.isRequired,
    task: PropTypes.shape({
        dateEnd: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        dateStart: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        executor: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }).isRequired,
    handleClickMore: PropTypes.func
};

export default Task
