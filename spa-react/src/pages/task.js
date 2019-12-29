import React from "react";
import Task from "../components/task/task"
import UserMenu from "../components/user-menu/user-menu";

const option = {
    isMore: false,
    isShowDesc: true
};

const PageTask = (props) => {
    return (
        <React.Fragment>
            <UserMenu
                changeActivePage={props.changeActivePage}
                handleAddTaskClick={props.handleAddTaskClick}
                handleClickExit={props.handleClickExit}
                user={props.user}
            />
            <Task
                isMore={option.isMore}
                isShowDesc={option.isShowDesc}
                task={props.task}
            />
        </React.Fragment>
    )
};

export default PageTask
