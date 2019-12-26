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

        this._handleLoginChange = this._handleLoginChange.bind(this);
        this._handlePasswordChange = this._handlePasswordChange.bind(this);
        this._validateForm = this._validateForm.bind(this);
        this._handleSubmitForm = this._handleSubmitForm.bind(this);
        this._handleClick = this._handleClick.bind(this);
    }

    render() {
        return (
            <form
                onSubmit={this._handleSubmitForm}
                className="form form_auth"
                method="post">
                <h3 className="form__title">Авторизация</h3>
                <div className="form__row form__row_content-column">
                    <label htmlFor="login">Ваш логин:</label>
                    <input
                        value={this.state.login}
                        onChange={this._handleLoginChange}
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
                        onChange={this._handlePasswordChange}
                        className="form__input"
                        id="password" type="password" name="password"
                        minLength={ConfMinAndMax.MIN_LENGTH_PASSWORD}
                        maxLength={ConfMinAndMax.MAX_LENGTH_PASSWORD}
                        required="required"/>
                </div>
                <div className="form__row form__row_content-column">
                    <button
                        className="form__button"
                        disabled={!this.state.validForm}
                        type="submit">Войти</button>
                </div>
                <div className="form__row">
                    <a
                        className="form__link-signup"
                        onClick={this._handleClick}
                        href="/signup.html">Зарегистрироваться</a>
                </div>
            </form>
        )
    }

    _validateForm(state) {
        const {login, password} = state;
        const isValidLogin = checkLengthMinMaxStr(login, ConfMinAndMax.MIN_LENGTH_LOGIN, ConfMinAndMax.MAX_LENGTH_LOGIN);
        const isValidPassword = checkLengthMinMaxStr(password, ConfMinAndMax.MIN_LENGTH_PASSWORD, ConfMinAndMax.MAX_LENGTH_PASSWORD);

        return isValidLogin && isValidPassword;
    }

    _handleLoginChange(evt) {
        const value = evt.target.value;
        this.setState({
            login: value,
            validForm: this._validateForm(Object.assign(this.state, {login: value}))
        });
    }

    _handlePasswordChange(evt) {
        const value = evt.target.value;
        this.setState({
            password: value,
            validForm: this._validateForm(Object.assign(this.state, {password: value}))
        });
    }

    _handleSubmitForm(evt) {
        evt.preventDefault();
        console.log(evt.target);
        console.log(new FormData(evt.target));
        const page = 4;
        this.props.changeActivePage(page);
        document.cookie = "userInfo=Пётр,Петрович,Петров; path=/; max-age=300";
        document.cookie = "FakePhpSession=iigubyguybguywg; path=/; max-age=300";
    }

    _handleClick(evt) {
        evt.preventDefault();
        const page = 2;
        this.props.changeActivePage(page);
    }
}
export default FormSingIn