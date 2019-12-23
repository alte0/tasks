import React, {Component} from "react";
import "./forms.scss";
import {checkLengthMinMaxStr} from "../../helpers/helpers";
import {ConfMinAndMax} from "../../vars/vars";

class FormSingIn extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            login: "",
            password: "",
            validForm: false
        };
        this.state = this.initialState;

        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }

    validateForm(state) {
        const {login, password} = state;
        const isValidLogin = checkLengthMinMaxStr(login, ConfMinAndMax.MIN_LENGTH_LOGIN, ConfMinAndMax.MAX_LENGTH_LOGIN);
        const isValidPassword = checkLengthMinMaxStr(password, ConfMinAndMax.MIN_LENGTH_PASSWORD, ConfMinAndMax.MAX_LENGTH_PASSWORD);

        return isValidLogin && isValidPassword;
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

    handleSubmitForm(evt) {
        evt.preventDefault();
        console.log(evt.target);
        console.log(new FormData(evt.target));
        alert('fake data');
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmitForm}
                className="form form_auth"
                method="post">
                <h3 className="form__title">Авторизация</h3>
                <div className="form__row form__row_content-column">
                    <label htmlFor="login">Ваш логин:</label>
                    <input
                        value={this.state.login}
                        onChange={this.handleLoginChange}
                        className="form__input"
                        id="login" type="text" name="login"
                        minLength={this.minLengthLogin}
                        maxLength={this.maxLengthLogin}
                        required="required"/>
                </div>
                <div className="form__row form__row_content-column">
                    <label htmlFor="password">Пароль:</label>
                    <input
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                        className="form__input"
                        id="password" type="password" name="password"
                        minLength={this.minLengthPassword}
                        maxLength={this.maxLengthPassword}
                        required="required"/>
                </div>
                <div className="form__row form__row_content-column">
                    <button
                        className="form__button"
                        disabled={!this.state.validForm}
                        type="submit">Войти</button>
                </div>
                <div className="form__row">
                    <a className="form__link-signup" href="/signup.html">Зарегистрироваться</a>
                </div>
            </form>
        )
    }
}
export default FormSingIn