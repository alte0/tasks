import React, {Component} from "react";
import "./user-menu.scss"
import PropTypes from "prop-types";

class UserMenu extends Component {
    constructor(props) {
        super(props);

        this._handleClick = this._handleClick.bind(this);
        this._handleAddTaskClick = this._handleAddTaskClick.bind(this);
    }

    _handleAddTaskClick(evt) {
        evt.preventDefault();
        const page = 3;
        this.props.changeActivePage(page);
    }

    _handleClick(evt) {
        evt.preventDefault();
        const isQuestion = window.confirm(`Вы действительно хотите выйти?`);
        if (isQuestion) {
            document.cookie = "userInfo=; path=/; max-age=-1";
            document.cookie = "FakePhpSession=; path=/; max-age=-1";
            const page = 1;
            this.props.changeActivePage(page);
        }
    }

    render() {
        return (
            <nav className="user-menu">
                <span className="user-menu__user-name">{`${this.props.userData.name} ${this.props.userData.surname} ${this.props.userData.patronymic}`}</span>
                <a className="user-menu__link" href="/designated-task">Я назначил задачу</a>
                <a
                    className="user-menu__link"
                    onClick={this._handleAddTaskClick}
                    href="/add-task.php">Поставить задачу</a>
                <a
                    className="user-menu__link user-menu__logout"
                    onClick={this._handleClick}
                    href="/logout">Выйти</a>
            </nav>
        )
    }
}

UserMenu.propsTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    patronymic: PropTypes.string.isRequired
};

export default UserMenu