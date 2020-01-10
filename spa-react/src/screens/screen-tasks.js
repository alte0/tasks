import React from "react";
import SearchByTasks from "../components/search-by-tasks/search-by-tasks";
import UserMenu from "../components/user-menu/user-menu";
import Tasks from "../components/tasks/tasks";
import Pagination from "../components/pagination/pagination";

const title = "Мои задачи.";

const ScreenTasks = (props) => {
    const {
        tasks,
        pageCurrentPagination,
        pagesCount,
        itemsTasks,
        user
        } = props;
    const visibleTasks = tasks.slice((pageCurrentPagination - 1) * itemsTasks, pageCurrentPagination * itemsTasks);

    return (
        <React.Fragment>
            <UserMenu
                changeActivePage={props.changeActivePage}
                handleAddTaskClick={props.handleAddTaskClick}
                handleClickExit={props.handleClickExit}
                user={user}
            />
            <SearchByTasks/>
            <Tasks
                tasks={visibleTasks}
                title={title}
                handleClickMore={props.handleClickMore}
            />
            {
                tasks.length > itemsTasks ?
                    <Pagination
                        pagesCount={pagesCount}
                        pageCurrentPagination={pageCurrentPagination}
                        handleClickChangePagePagination={props.handleClickChangePagePagination}
                    />
                    :
                    null
            }
        </React.Fragment>
    )
};

export default ScreenTasks