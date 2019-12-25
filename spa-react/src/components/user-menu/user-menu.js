import React from "react";
import "./user-menu.scss"
import PropTypes from "prop-types";

const UserMenu = (props) => {
    const {name, surname, patronymic} = props.user;
    return (
        <nav className="user-menu">
            <span className="user-menu__user-name">{`${name} ${surname} ${patronymic}`}</span>
            <a className="user-menu__link" href="/designated-task.php">Я назначил задачу</a>
            <a className="user-menu__link" href="/add-task.php">Поставить задачу</a>
            <a className="user-menu__link user-menu__logout" href="/logout.php">Выйти</a>
        </nav>
    )
};

UserMenu.propsTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    patronymic: PropTypes.string.isRequired
};

export default UserMenu