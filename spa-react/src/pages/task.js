import React from "react";
import Task from "../components/task/task"
import UserMenu from "../components/user-menu/user-menu";

const option = {
    isMore: false,
    isShowDesc: true
};

const task = {
    title: "Задача 1",
    desc: "Описание задачи: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem alias quidem officia quisquam optio, nam itaque, id neque fugit et tempora saepe, consequatur voluptatem maiores? Corrupti maiores provident blanditiis voluptas.",
    dateStart:" 2019-12-12",
    dateEnd: "2019-12-13",
    status: "В работе",
    author: "Попов Павел Петрович",
    executor: "Попов Павел Петрович",
};

export default function PageTask() {
    return (
        <React.Fragment>
            <UserMenu/>
            <Task isMore={option.isMore} isShowDesc={option.isShowDesc} data={task}/>
        </React.Fragment>
    )
}
