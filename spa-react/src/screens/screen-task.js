import React from "react";
import Task from "../components/task/task"
import UserMenu from "../components/user-menu/user-menu";

const option = {
    isMore: false,
    isShowDesc: true
};

const ScreenTask = (props) => {
    return (
        <React.Fragment>
            <UserMenu
                changeActivePage={props.changeActivePage}
                handleClickUserOtherLinks={props.handleClickUserOtherLinks}
                handleClickExit={props.handleClickExit}
                user={props.user}
                links={props.menuLinks}
            />
            <Task
                isMore={option.isMore}
                isShowDesc={option.isShowDesc}
                task={props.task}
                handleClickExecuteTask={props.handleClickExecuteTask}
            />
        </React.Fragment>
    )
};

export default ScreenTask
