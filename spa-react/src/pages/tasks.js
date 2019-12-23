import React from "react";
import SearchByTasks from "../components/search-by-tasks/search-by-tasks";
import UserMenu from "../components/user-menu/user-menu";
import Tasks from "../components/tasks/tasks";

const tasks = [
    {
        title: "Задача 1",
        desc: "Описание задачи: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem alias quidem officia quisquam optio, nam itaque, id neque fugit et tempora saepe, consequatur voluptatem maiores? Corrupti maiores provident blanditiis voluptas.",
        dateStart:" 2019-12-12",
        dateEnd: "2019-12-13",
        status: "В работе",
        author: "Попов Павел Петрович",
        executor: "Попов Павел Петрович",
    },
    {
        title: "Задача 2",
        desc: "Описание задачи: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem alias quidem officia quisquam optio, nam itaque, id neque fugit et tempora saepe, consequatur voluptatem maiores? Corrupti maiores provident blanditiis voluptas.",
        dateStart:" 2019-10-10",
        dateEnd: "2019-10-11",
        status: "В работе",
        author: "Попов Павел Петрович",
        executor: "Попов Павел Петрович",
    }
];

const title = "Мои задачи.";

export default function Task() {
    return (
        <React.Fragment>
            <UserMenu/>
            <SearchByTasks/>
            <Tasks
                tasks={tasks}
                title={title}
            />
        </React.Fragment>
    )
}