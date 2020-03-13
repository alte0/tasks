import React, {Component} from "react";
import "./forms.scss"
import {checkLengthMinMaxStr} from "../../helpers/helpers";
import {ConfMinAndMax} from "../../vars/vars";
import {showMessage, TypeMessage} from "../../plugins/show-message";
import { signUpUser } from "../../data/data";

class FormSingUp extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            login: "",
            password: "",
            password2: "",
            name: "",
            surname: "",
            patronymic: "",
            validForm: false
        };

        this.state = this.initialState;
    }

    render() {
        return (
            <form
                onSubmit={this._handleSubmitForm}
                className="form form_center form_reg"
                method="post">
                <h3 className="form__title">Регистрация нового пользователя
                </h3>
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
                    <label htmlFor="password2">Повторите пароль:</label>
                    <input
                        value={this.state.password2}
                        onChange={this._handlePassword2Change}
                        onBlur={this._onBlurInput}
                        className="form__input input"
                        id="password2" type="password" name="password2"
                        minLength={ConfMinAndMax.MIN_LENGTH_PASSWORD}
                        maxLength={ConfMinAndMax.MAX_LENGTH_PASSWORD}
                        required="required"/>
                </div>
                <div className="form__row form__row_content-column">
                    <label htmlFor="name">Имя:</label>
                    <input
                        value={this.state.name}
                        onChange={this._handleNameChange}
                        className="form__input input"
                        id="name" type="text" name="name"
                        minLength={ConfMinAndMax.MIN_LENGTH_TEXT}
                        maxLength={ConfMinAndMax.MAX_LENGTH_TEXT}
                        required="required"/>
                </div>
                <div className="form__row form__row_content-column">
                    <label htmlFor="surname">Фамилия:</label>
                    <input
                        value={this.state.surname}
                        onChange={this._handleSurnameChange}
                        className="form__input input"
                        id="surname" type="text" name="surname"
                        minLength={ConfMinAndMax.MIN_LENGTH_TEXT}
                        maxLength={ConfMinAndMax.MAX_LENGTH_TEXT}
                        required="required"/>
                </div>
                <div className="form__row form__row_content-column">
                    <label htmlFor="patronymic">Отчество:</label>
                    <input
                        value={this.state.patronymic}
                        onChange={this.handlePatronymicChange}
                        className="form__input input"
                        id="patronymic" type="text" name="patronymic"
                        minLength={ConfMinAndMax.MIN_LENGTH_TEXT}
                        maxLength={ConfMinAndMax.MAX_LENGTH_TEXT}
                        required="required"/>
                </div>
                <div className="form__row form__row_content-column">
                    <button
                        disabled={!this.state.validForm}
                        className="form__button submit"
                        type="submit">Зарегистрироваться</button>
                </div>
                <div className="form__row form__row_text-center">
                    <a
                        className="form__link-signup link"
                        onClick={this._handleClick}
                        href="/signin">Авторизоваться</a>
                </div>
            </form>
        )
    }

    _validateForm = (state) => {
        const {login, password, password2, name, surname, patronymic} = state;
        const isValidLogin = checkLengthMinMaxStr(login, ConfMinAndMax.MIN_LENGTH_LOGIN, ConfMinAndMax.MAX_LENGTH_LOGIN);
        const isValidPassword = checkLengthMinMaxStr(password, ConfMinAndMax.MIN_LENGTH_PASSWORD, ConfMinAndMax.MAX_LENGTH_PASSWORD);
        const isValidPassword2 = checkLengthMinMaxStr(password2, ConfMinAndMax.MIN_LENGTH_PASSWORD, ConfMinAndMax.MAX_LENGTH_PASSWORD);
        const isValidEquallyPassword = password === password2;
        const isValidName = checkLengthMinMaxStr(name, ConfMinAndMax.MIN_LENGTH_TEXT, ConfMinAndMax.MAX_LENGTH_TEXT);
        const isValidSurname = checkLengthMinMaxStr(surname, ConfMinAndMax.MIN_LENGTH_TEXT, ConfMinAndMax.MAX_LENGTH_TEXT);
        const isValidPatronymic = checkLengthMinMaxStr(patronymic, ConfMinAndMax.MIN_LENGTH_TEXT, ConfMinAndMax.MAX_LENGTH_TEXT);

        return isValidLogin && isValidPassword && isValidPassword2 && isValidEquallyPassword && isValidName && isValidSurname && isValidPatronymic;
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

    _handlePassword2Change = (evt) => {
        const value = evt.target.value;
        this.setState((state) => ({
            password2: value,
            validForm: this._validateForm(Object.assign({}, state, {password2: value}))
        }));
    };

    _handleNameChange = (evt) => {
        const value = evt.target.value;
        this.setState((state) => ({
            name: value,
            validForm: this._validateForm(Object.assign({}, state, {name: value}))
        }));
    };

    _handleSurnameChange = (evt) => {
        const value = evt.target.value;
        this.setState((state) => ({
            surname: value,
            validForm: this._validateForm(Object.assign({}, state, {surname: value}))
        }));
    };

    handlePatronymicChange = (evt) => {
        const value = evt.target.value;
        this.setState((state) => ({
            patronymic: value,
            validForm: this._validateForm(Object.assign({}, state, {patronymic: value}))
        }));
    };

    _handleSubmitForm = (evt) => {
        evt.preventDefault();

        let formData = new FormData(evt.target);
        formData.append('signup', 'ajax');

        signUpUser(formData)
            .then(result => {
                showMessage(result.msgsType, '', result.textMsgs);
                if (result.msgsType === 'success') {
                    this.setState(this.initialState);

                    return true
                }
            })
            .catch(e => {
                console.error(e);
                showMessage(TypeMessage.ERROR, e, 'Произошла ошибка.');
            });
    };

    _onBlurInput = () => {
        const {password, password2} = this.state;
        if (password.length >= ConfMinAndMax.MIN_LENGTH_PASSWORD && password !== password2) {
            showMessage(TypeMessage.WARNING, `В поле "Повторите пароль", пароль не совпадает с полем "Пароль"!`);
        }
    };

    _handleClick = (evt) => {
        evt.preventDefault();
        this.props.changeActivePage("screen-sing-in");
    };
}
export default FormSingUp