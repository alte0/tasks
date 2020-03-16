import React from "react";
// import SearchByTasks from "../components/search-by-tasks/search-by-tasks";
// import UserMenu from "../components/user-menu/user-menu";
// import Tasks from "../components/tasks/tasks";
// import Pagination from "../components/pagination/pagination";

import { Redirect } from "react-router-dom";

const PageTasks = (props) => {
    if (!props.isLoggedIn) {
        return (<Redirect to="/sing-in" />)
    }

    return (
        <h1>Задачи</h1>
    )
    // const {
    //     tasks,
    //     pageCurrentPagination,
    //     pagesCount,
    //     itemsTasks,
    //     user,
    //     menuLinks,
    //     textSearch,
    //     handleChangeTextSearch,
    //     handleSubmitFormSearch,
    //     title,
    //     isShowLinkExecute
    //     } = props;
    // const visibleTasks = tasks.length ? tasks.slice((pageCurrentPagination - 1) * itemsTasks, pageCurrentPagination * itemsTasks) : tasks;

    // return (
    //     <React.Fragment>
    //         <UserMenu
    //             changeActivePage={props.changeActivePage}
    //             handleClickUserOtherLinks={props.handleClickUserOtherLinks}
    //             handleClickExit={props.handleClickExit}
    //             user={user}
    //             links={menuLinks}
    //         />
    //         <SearchByTasks
    //             textSearch={textSearch}
    //             handleChangeTextSearch={handleChangeTextSearch}
    //             handleSubmitFormSearch={handleSubmitFormSearch}
    //             />
    //         <Tasks
    //             tasks={visibleTasks}
    //             title={title}
    //             isShowLinkExecute={isShowLinkExecute}
    //             handleClickMore={props.handleClickMore}
    //             handleClickExecuteTask={props.handleClickExecuteTask}
    //         />
    //         {
    //             tasks.length > itemsTasks ?
    //                 <Pagination
    //                     pagesCount={pagesCount}
    //                     pageCurrentPagination={pageCurrentPagination}
    //                     handleClickChangePagePagination={props.handleClickChangePagePagination}
    //                 />
    //                 :
    //                 null
    //         }
    //     </React.Fragment>
    // )
};

export default PageTasks