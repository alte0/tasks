import React from "react";
import Task from "../components/task/task"
import UserMenu from "../components/user-menu/user-menu";
import {tasks} from "../mocks/mocks";

const option = {
    isMore: false,
    isShowDesc: true
};

const PageTask = (props) => {
    return (
        <React.Fragment>
            <UserMenu changeActivePage={props.changeActivePage}/>
            <Task isMore={option.isMore} isShowDesc={option.isShowDesc} data={tasks[0]}/>
        </React.Fragment>
    )
};

export default PageTask
