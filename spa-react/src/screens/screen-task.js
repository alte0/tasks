import React from "react";
import Task from "../components/task/task"
import UserMenu from "../components/user-menu/user-menu";

const option = {
    isMore: false,
    isShowDesc: true
};

const ScreenTask = (props) => {
    const links = [
        {textLink: "Мои задачи", href: "/", dataScreen: "screen-tasks"},
        {textLink: "Поставить задачу", href: "/add-task", dataScreen: "screen-add-task"},
    ];

    return (
        <React.Fragment>
            <UserMenu
                changeActivePage={props.changeActivePage}
                handleClickUserOtherLinks={props.handleClickUserOtherLinks}
                handleClickExit={props.handleClickExit}
                user={props.user}
                links={links}
            />
            <Task
                isMore={option.isMore}
                isShowDesc={option.isShowDesc}
                task={props.task}
            />
        </React.Fragment>
    )
};

export default ScreenTask
