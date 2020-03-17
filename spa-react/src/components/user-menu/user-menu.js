import React from "react";
import "./user-menu.scss"
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getActiveMenuLinks } from "../../helpers/helpers";

const UserMenu = (props) => {
    const {
        user,
        url,
        handleClickExit
    } = props;

    return (
        <nav className="user-menu">
            <span className="user-menu__user-name">{`${user.surname} ${user.name} ${user.patronymic}`}</span>
            {
                getActiveMenuLinks(url).map((item, index) => {
                    return (
                        <Link
                            className="user-menu__link link"
                            key={item.href + index}
                            to={item.href}
                            >{item.textLink}</Link>
                    )
                })
            }
            <Link 
                className="user-menu__link link"
                to="/add-task"
                >Поставить задачу</Link>
            <a
                className="user-menu__link user-menu__logout link"
                onClick={handleClickExit}
                href="/logout">Выйти</a>
        </nav>
    )
};

UserMenu.propTypes = {
    url: PropTypes.string.isRequired,
    user: PropTypes.shape({
        surname: PropTypes.string,
        name: PropTypes.string,
        patronymic: PropTypes.string
    }).isRequired
};

export default UserMenu