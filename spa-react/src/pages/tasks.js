import React from "react";
import SearchByTasks from "../components/search-by-tasks/search-by-tasks";
import UserMenu from "../components/user-menu/user-menu";
import Tasks from "../components/tasks/tasks";
import {tasks} from "../mocks/mocks";

const title = "Мои задачи.";

const pageTasks = (props) => {
    return (
        <React.Fragment>
            <UserMenu changeActivePage={props.changeActivePage}/>
            <SearchByTasks/>
            <Tasks
                tasks={tasks}
                title={title}
            />
        </React.Fragment>
    )
};

export default pageTasks