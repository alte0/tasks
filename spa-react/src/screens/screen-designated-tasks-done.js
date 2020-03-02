import React from "react";
import SearchByTasks from "../components/search-by-tasks/search-by-tasks";
import UserMenu from "../components/user-menu/user-menu";
import Tasks from "../components/tasks/tasks";
import Pagination from "../components/pagination/pagination";

const title = "Выполненные задачи другими.";

const ScreenDesignatedTasks = (props) => {
    const {
        tasks,
        pageCurrentPagination,
        pagesCount,
        itemsTasks,
        user
        } = props;
    const visibleTasks = tasks.slice((pageCurrentPagination - 1) * itemsTasks, pageCurrentPagination * itemsTasks);
    const links = [
        { textLink: "Выполненые задачи другими", href: "/designated-task-done", dataScreen: "screen-designated-tasks-done"},
        { textLink: "Мои задачи", href: "/my-tasks", dataScreen: "screen-tasks"},
    ];

    return (
        <React.Fragment>
            <UserMenu
                changeActivePage={props.changeActivePage}
                handleClickUserOtherLinks={props.handleClickUserOtherLinks}
                handleClickExit={props.handleClickExit}
                user={user}
                links={links}
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

export default ScreenDesignatedTasks