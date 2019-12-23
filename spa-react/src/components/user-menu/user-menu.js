import React from "react";
import "./user-menu.scss"

export default function UserMenu() {
    return (
        <nav className="user-menu">
            <span className="user-menu__user-name">Петров Пётр Петрович</span>
            <a className="user-menu__link" href="/designated-task.php">Я назначил задачу</a>
            <a className="user-menu__link" href="/add-task.php">Поставить задачу</a>
            <a className="user-menu__link user-menu__logout" href="/logout.php">Выйти</a>
        </nav>
    )
}




