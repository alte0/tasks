import React from "react";
import "./user-menu.scss"
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import {deleteCookie, getActiveMenuLinks } from "../../helpers/helpers";
import { apiFetch } from "../../api/api-fetch";
import {showMessage, TypeMessage} from "../../plugins/show-message";
import { connect} from "react-redux";

const UserMenu = ({ user, url, history}) => {
    const handleClickExit = (evt) => {
        evt.preventDefault();

        const isQuestion = window.confirm(`Вы действительно хотите выйти?`);
        if (isQuestion) {
            apiFetch.logOut()
                .then(response => {
                    showMessage(response.msgsType, '', response.textMsgs);
                    if (response.msgsType === 'success') {
                        deleteCookie('PHPSESSID');
                        deleteCookie('userInfo');
                        history.push('/sing-in');
                    }
                    return true;
                })
                .catch(e => {
                    console.error(e);
                    showMessage(TypeMessage.ERROR, e, );
                });
        }
    }

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
                href="/log-out">Выйти</a>
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

const mapStateToProps = (state) => ({ user: state.user })

export default withRouter(
    connect(mapStateToProps)(UserMenu)
)
