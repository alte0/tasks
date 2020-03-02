import React from "react";
import PropTypes from "prop-types";
import Task from "../task/task";
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
                                return (
                                    <li
                                        className={`tasks__item ${option.isTasks ? 'task' : ''}`}
                                        key={task.id}>
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