import React from "react";
import "./user-menu.scss"
import PropTypes from "prop-types";

const UserMenu = (props) => {
    const {
        name,
        surname,
        patronymic,
    } = props.user;

    return (
        <nav className="user-menu">
            <span className="user-menu__user-name">{`${name} ${surname} ${patronymic}`}</span>
            {
                props.links.map((item, index) => {
                    return (
                        <a className="user-menu__link link"
                           key={item.dataScreen + index}
                           href={item.href}
                            data-screen={item.dataScreen}
                            onClick={props.handleClickUserOtherLinks}>{item.textLink}</a>
                    )
                })
            }
            {/* <a className="user-menu__link" href="/designated-task">Я назначил задачу</a>*/}
            <a
               className="user-menu__link link"
               onClick={props.handleClickUserOtherLinks}
               data-screen="screen-add-task"
               href="/add-task">Поставить задачу</a>
            <a
                className="user-menu__link user-menu__logout link"
                onClick={props.handleClickExit}
                href="/logout">Выйти</a>
        </nav>
    )
};

UserMenu.propsTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    patronymic: PropTypes.string.isRequired,
    handleAddTaskClick: PropTypes.func.isRequired,
    handleClickExit: PropTypes.func.isRequired,
};

export default UserMenu