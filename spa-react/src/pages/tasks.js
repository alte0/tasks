import React from "react";
import SearchByTasks from "../components/search-by-tasks/search-by-tasks";
import UserMenu from "../components/user-menu/user-menu";
import Tasks from "../components/tasks/tasks";

const title = "Мои задачи.";

const pageTasks = (props) => {
    return (
        <React.Fragment>
            <UserMenu
                changeActivePage={props.changeActivePage}
                handleAddTaskClick={props.handleAddTaskClick}
                handleClickExit={props.handleClickExit}
                user={props.user}
            />
            <SearchByTasks/>
            <Tasks
                tasks={props.tasks}
                title={title}
                handleClickMore={props.handleClickMore}
            />
        </React.Fragment>
    )
};

export default pageTasks