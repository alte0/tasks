import React, { Component } from "react";
import "./forms.scss";
import {checkLengthMinMaxStr, getCookie} from "../../helpers/helpers";
import { ConfMinAndMax } from "../../vars/vars";
import { checkLoggedUser } from "../../helpers/helpers";
import { apiFetch } from "../../api/api-fetch";
import { TypeMessage, showMessage } from '../../plugins/show-message';

import { Link, withRouter } from "react-router-dom";
import { connect} from "react-redux";
import { getUserInfo } from "../../actions";


class FormSingIn extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            login: "",
            password: "",
            validForm: false
        };
        this.state = this.initialState;
    }

    render() {
        return (
            <form
                onSubmit={this._handleSubmitForm}
                className="form form_center form_auth"
                method="post">
                <h3 className="form__title">Авторизация</h3>
                <div className="form__row form__row_content-column">
                    <label htmlFor="login">Ваш логин:</label>
                    <input
                        value={this.state.login}
                        onChange={this._handleLoginChange}
                        className="form__input input"
                        id="login" type="text" name="login"
                        minLength={ConfMinAndMax.MIN_LENGTH_LOGIN}
                        maxLength={ConfMinAndMax.MAX_LENGTH_LOGIN}
                        required="required"/>
                </div>
                <div className="form__row form__row_content-column">
                    <label htmlFor="password">Пароль:</label>
                    <input
                        value={this.state.password}
                        onChange={this._handlePasswordChange}
                        className="form__input input"
                        id="password" type="password" name="password"
                        minLength={ConfMinAndMax.MIN_LENGTH_PASSWORD}
                        maxLength={ConfMinAndMax.MAX_LENGTH_PASSWORD}
                        required="required"/>
                </div>
                <div className="form__row form__row_content-column">
                    <button
                        className="form__button submit"
                        disabled={!this.state.validForm}
                        type="submit">Войти</button>
                </div>
                <div className="form__row form__row_text-center">
                    <Link
                        to="/sing-up"
                        className="form__link-signup link"
                        >Зарегистрироваться</Link>
                </div>
            </form>
        )
    }

    _validateForm = (state) => {
        const {login, password} = state;
        const isValidLogin = checkLengthMinMaxStr(login, ConfMinAndMax.MIN_LENGTH_LOGIN, ConfMinAndMax.MAX_LENGTH_LOGIN);
        const isValidPassword = checkLengthMinMaxStr(password, ConfMinAndMax.MIN_LENGTH_PASSWORD, ConfMinAndMax.MAX_LENGTH_PASSWORD);

        return isValidLogin && isValidPassword;
    };

    _handleLoginChange = (evt) => {
        const value = evt.target.value;
        this.setState((state) => ({
            login: value,
            validForm: this._validateForm(Object.assign({}, state, {login: value}))
        }));
    };

    _handlePasswordChange = (evt) => {
        const value = evt.target.value;
        this.setState((state) => ({
            password: value,
            validForm: this._validateForm(Object.assign({}, state, {password: value}))
        }));
    };

    _handleSubmitForm = (evt) => {
        evt.preventDefault();

        let formData = new FormData(evt.target);

        apiFetch.signInUser(formData)
            .then(result => {
                showMessage(result.msgsType, '', result.textMsgs);
                if (result.msgsType === 'success') {
                    this.setState(this.initialState);

                    if (checkLoggedUser()) {
                        const userInfo = getCookie("userInfo").split(";");
                        const user = getUserInfo({
                            name: userInfo[0],
                            surname: userInfo[1],
                            patronymic: userInfo[2],
                            userId: Number(userInfo[3])
                        });

                        this.props.getUserInfoToProps(user);
                        this.props.history.push('/');
                    }
                }
            })
            .catch(e => {
                console.error(e);
                showMessage(TypeMessage.ERROR, e, 'Произошла ошибка.');
            });
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserInfoToProps: (user) => (dispatch(user))
    }
}

export default withRouter(
    connect(null, mapDispatchToProps)(FormSingIn)
)
