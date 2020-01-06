import React from "react";
import SearchByTasks from "../components/search-by-tasks/search-by-tasks";
import UserMenu from "../components/user-menu/user-menu";
import Tasks from "../components/tasks/tasks";
import Pagination from "../components/pagination/pagination";

const title = "Мои задачи.";

const ScreenTasks = (props) => {
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
                tasks={props.showTasks}
                title={title}
                handleClickMore={props.handleClickMore}
            />
            {
                props.tasks.length > props.itemsTasks ?
                    <Pagination
                        pages={props.pages}
                        pageCurrent={props.pageCurrent}
                        handleClickChangePagePagination={props.handleClickChangePagePagination}
                    />
                    :
                    null
            }
        </React.Fragment>
    )
};

export default ScreenTasks