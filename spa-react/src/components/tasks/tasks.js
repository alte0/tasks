import React from "react";
import PropTypes from "prop-types";
import Task from "../task/task";
import { hasDateExpired } from "../../helpers/helpers";
import "./tasks.scss";

const option = {
    isMore: true,
    isShowDesc: false,
    isTasks: true
};

export const Tasks = (props) => {
    const {
        title,
        tasks
        } = props;

    return (
        <section className="tasks">
            <h2 className="tasks__title">{title}</h2>
            {
                tasks.length ?
                    <ul className="tasks__lists">
                        {
                            tasks.map((task)=> {
                                const classTaskItem = option.isTasks ? 'task' : '';
                                const classTaskExpired = hasDateExpired(task.task_date_end) && Number(task.task_date_no_limit) !== 1 ? `task_expired` : ``;

                                return (
                                    <li
                                        className={`tasks__item ${classTaskItem} ${classTaskExpired}`}
                                        key={task.task_id}>
                                        <Task
                                            isMore={option.isMore}
                                            isShowDesc={option.isShowDesc}
                                            isTasks={option.isTasks}
                                            task={task}
                                            handleClickMore={props.handleClickMore}
                                        />
                                    </li>
                                )
                            })
                        }
                    </ul> :
                    <div>Нет никаких задач</div>
            }
        </section>
    )
};

Tasks.propTypes = {
    title: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired,
    handleClickMore: PropTypes.func
};
export default Tasks