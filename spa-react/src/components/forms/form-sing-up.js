import React, {Component} from "react";
import "./forms.scss"
import {checkLengthMinMaxStr} from "../../helpers/helpers";
import {ConfMinAndMax} from "../../vars/vars";
import {showMessage, TypeMessage} from "../../plugins/show-message";


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

        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handlePassword2Change = this.handlePassword2Change.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handlePatronymicChange = this.handlePatronymicChange.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.onBlurInput = this.onBlurInput.bind(this);
    }

    validateForm(state) {
        const {login, password, password2, name, surname, patronymic} = state;
        const isValidLogin = checkLengthMinMaxStr(login, ConfMinAndMax.MIN_LENGTH_LOGIN, ConfMinAndMax.MAX_LENGTH_LOGIN);
        const isValidPassword = checkLengthMinMaxStr(password, ConfMinAndMax.MIN_LENGTH_PASSWORD, ConfMinAndMax.MAX_LENGTH_PASSWORD);
        const isValidPassword2 = checkLengthMinMaxStr(password2, ConfMinAndMax.MIN_LENGTH_PASSWORD, ConfMinAndMax.MAX_LENGTH_PASSWORD);
        const isValidEquallyPassword = password === password2;
        const isValidName = checkLengthMinMaxStr(name, ConfMinAndMax.MIN_LENGTH_TEXT, ConfMinAndMax.MAX_LENGTH_TEXT);
        const isValidSurname = checkLengthMinMaxStr(surname, ConfMinAndMax.MIN_LENGTH_TEXT, ConfMinAndMax.MAX_LENGTH_TEXT);
        const isValidPatronymic = checkLengthMinMaxStr(patronymic, ConfMinAndMax.MIN_LENGTH_TEXT, ConfMinAndMax.MAX_LENGTH_TEXT);

        return isValidLogin && isValidPassword && isValidPassword2 && isValidEquallyPassword && isValidName && isValidSurname && isValidPatronymic;
    }

    handleLoginChange(evt) {
        const value = evt.target.value;
        this.setState({
            login: value,
            validForm: this.validateForm(Object.assign(this.state, {login: value}))
        });
    }

    handlePasswordChange(evt) {
        const value = evt.target.value;
        this.setState({
            password: value,
            validForm: this.validateForm(Object.assign(this.state, {password: value}))
        });
    }

    handlePassword2Change(evt) {
        const value = evt.target.value;
        this.setState({
            password2: value,
            validForm: this.validateForm(Object.assign(this.state, {password2: value}))
        });
    }

    handleNameChange(evt) {
        const value = evt.target.value;
        this.setState({
            name: value,
            validForm: this.validateForm(Object.assign(this.state, {name: value}))
        });
    }

    handleSurnameChange(evt) {
        const value = evt.target.value;
        this.setState({
            surname: value,
            validForm: this.validateForm(Object.assign(this.state, {surname: value}))
        });
    }

    handlePatronymicChange(evt) {
        const value = evt.target.value;
        this.setState({
            patronymic: value,
            validForm: this.validateForm(Object.assign(this.state, {patronymic: value}))
        });
    }

    handleSubmitForm(evt) {
        evt.preventDefault();
        console.log(evt.target);
        console.log(new FormData(evt.target));
        alert('fake data');
    }

    onBlurInput() {
        if (this.state.password.length >= ConfMinAndMax.MIN_LENGTH_PASSWORD && this.state.password !== this.state.password2) {
            showMessage(TypeMessage.WARNING, `В поле "Повторите пароль", пароль не совпадает с полем "Пароль!"`);
        }
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmitForm}
                className="form form_reg"
                method="post">
                <h3 className="form__title">Регистрация нового пользователя
                </h3>
                <div className="form__row form__row_content-column">
                    <label htmlFor="login">Ваш логин:</label>
                    <input
                        value={this.state.login}
                        onChange={this.handleLoginChange}
                        className="form__input"
                        id="login" type="text" name="login"
                        minLength={ConfMinAndMax.MIN_LENGTH_LOGIN}
                        maxLength={ConfMinAndMax.MAX_LENGTH_LOGIN}
                        required="required"/>
                </div>
                <div className="form__row form__row_content-column">
                    <label htmlFor="password">Пароль:</label>
                    <input
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                        className="form__input"
                        id="password" type="password" name="password"
                        minLength={ConfMinAndMax.MIN_LENGTH_PASSWORD}
                        maxLength={ConfMinAndMax.MAX_LENGTH_PASSWORD}
                        required="required"/>
                </div>
                <div className="form__row form__row_content-column">
                    <label htmlFor="password2">Повторите пароль:</label>
                    <input
                        value={this.state.password2}
                        onChange={this.handlePassword2Change}
                        onBlur={this.onBlurInput}
                        className="form__input"
                        id="password2" type="password" name="password2"
                        minLength={ConfMinAndMax.MIN_LENGTH_PASSWORD}
                        maxLength={ConfMinAndMax.MAX_LENGTH_PASSWORD}
                        required="required"/>
                </div>
                <div className="form__row form__row_content-column">
                    <label htmlFor="name">Имя:</label>
                    <input
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        className="form__input"
                        id="name" type="text" name="name"
                        minLength={ConfMinAndMax.MIN_LENGTH_TEXT}
                        maxLength={ConfMinAndMax.MAX_LENGTH_TEXT}
                        required="required"/>
                </div>
                <div className="form__row form__row_content-column">
                    <label htmlFor="surname">Фамилия:</label>
                    <input
                        value={this.state.surname}
                        onChange={this.handleSurnameChange}
                        className="form__input"
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
                        className="form__input"
                        id="patronymic" type="text" name="patronymic"
                        minLength={ConfMinAndMax.MIN_LENGTH_TEXT}
                        maxLength={ConfMinAndMax.MAX_LENGTH_TEXT}
                        required="required"/>
                </div>
                <div className="form__row form__row_content-column">
                    <button
                        disabled={!this.state.validForm}
                        className="form__button"
                        type="submit">Зарегистрироваться</button>
                </div>
                <div className="form__row">
                    <a className="form__link-signup" href="/signin.html">Авторизоваться</a>
                </div>
            </form>
        )
    }
}
export default FormSingUp