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
        user,
        menuLinks
        } = props;
    const visibleTasks = tasks.length ? tasks.slice((pageCurrentPagination - 1) * itemsTasks, pageCurrentPagination * itemsTasks) : tasks;

    return (
        <React.Fragment>
            <UserMenu
                changeActivePage={props.changeActivePage}
                handleClickUserOtherLinks={props.handleClickUserOtherLinks}
                handleClickExit={props.handleClickExit}
                user={user}
                links={menuLinks}
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