import React, { Component } from "react";
import "./forms.scss";

import { initFlatpickr, destroyFlatpickr } from "../../plugins/flatpickr";
import { initEditor, destroyEditor } from "../../plugins/editor";
import { checkLengthMinMaxStr } from "../../helpers/helpers";
import { ConfMinAndMaxAddTask } from "../../vars/vars";
import { apiFetch } from "../../api/api-fetch";
import { TypeMessage, showMessage } from '../../plugins/show-message';
import { addTask } from "../../data/data";
import { clearDataEditor } from "../../plugins/editor";
import { clearDataFlatpickr } from "../../plugins/flatpickr";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { allUsers } from "../../actions";


class FormAddTask extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            selectedDates: "",
            isCheckedDateNoLimit: false,
            valueSelect: "disabled",
            titleTask: "",
            descTask: "",
            validForm: false,
        };
        this.state = this.initialState;

        this.inputDatesRef = React.createRef();
        this.textareaRef = React.createRef();
    }

    componentDidMount() {
        initFlatpickr(this.inputDatesRef.current);
        initEditor(this.textareaRef.current, this._handleDescTaskChange);
        apiFetch.getAllUsers()
            .then(users => {
                if (users.msgsType === 'error') {
                    this.props.getAllUsersDispatch([]);
                    return;
                }

                this.props.getAllUsersDispatch(users);
            })
            .catch(e => {
                console.error(e);
                showMessage(TypeMessage.ERROR, e, 'Ошибка получения данных.');
            });
    }

    componentWillUnmount() {
        destroyEditor();
        destroyFlatpickr();
    }

    render() {
      const { userId: userIdCurrent } = this.props.user;

        return (
            <form
                onSubmit={this.handleSubmitForm}
                className="form form_task-add"
                action="" method="post">
                <div className="form__row form__row_label-group-two">
                    <label htmlFor="date">Дата начала и окончания задачи</label>
                    <div
                        ref={this.inputDatesRef}
                        className="flatpickr">
                        <input
                            className="form__date input"
                            onInput={this._handleDatesChange}
                            id="date" type="text" name="date"
                            placeholder="выберите дату или даты" data-input="data-input" required="required" />
                        <button type="button" title="Открыт/Закрыть календарь" data-toggle="">календарь</button>
                        <button type="button" title="Очистить календарь" data-clear="">очистить</button>
                    </div>
                </div>
                <div className="form__row">
                    <input
                        className="form__checkbox"
                        onChange={this._handleDateNoLimitChange}
                        checked={this.state.isCheckedDateNoLimit}
                        type="checkbox" name="date-no-limit" id="date-no-limit" />
                    <label htmlFor="date-no-limit">Без даты окончания (дата окончания выбранная выше, будет игнорирована)</label>
                </div>
                <div className="form__row form__row_content-column">
                    <span>Выберите исполнителя</span>
                    <select
                        value={this.state.valueSelect}
                        onChange={this._handleSelectChange}
                        className="form__select" name="executor" required="required">
                        <option value="disabled" disabled="disabled">Не выбрано</option>
                        {
                            this.props.users.map(user => (
                                <option
                                    value={user.user_id}
                                    key={user.user_id}
                                > { userIdCurrent === Number(user.user_id) ? "Я" : `${user.user_surname} ${user.user_name} ${user.user_patronymic}` } </option>
                            ))
                        }
                    </select>
                </div>
                <div className="form__row form__row_content-column">
                    <label>Загаловок задачи</label>
                    <textarea
                        value={this.state.titleTask}
                        onChange={this._handleTitleTaskChange}
                        className="form__title-add textarea" name="title" maxLength="255" placeholder="сделать ..." required="required" />
                </div>
                <div className="form__row form__row_content-column">
                    <label>Дополнительная информация по задаче</label>
                    <textarea
                        className="textarea"
                        ref={this.textareaRef}
                        value={this.state.descTask}
                        onChange={this._handleDescTaskChange}
                        id="textarea-text" name="text" maxLength="1000" placeholder="Обьяснение задачи ..." required="required" />
                </div>
                <div className="form__row form__row_text-center">
                    <button
                        disabled={!this.state.validForm}
                        className="form__submit submit"
                        type="submit">Добавить задачу</button>
                    <Link
                        className="form__link link"
                        to="/"
                    >К списку моих задач</Link>
                </div>
            </form>
        )
    }

    _validateForm = (state) => {
        const { selectedDates, valueSelect, titleTask, descTask } = state;
        const isValidValueSelect = valueSelect !== "disabled";
        const isValidTitleTask = checkLengthMinMaxStr(titleTask, ConfMinAndMaxAddTask.MIN_LENGTH_TEXT, ConfMinAndMaxAddTask.MAX_LENGTH_TEXT_TITLE);
        const isValidDescTask = checkLengthMinMaxStr(descTask, ConfMinAndMaxAddTask.MIN_LENGTH_TEXT, ConfMinAndMaxAddTask.MAX_LENGTH_TEXT_DESK);

        return selectedDates && isValidValueSelect && isValidTitleTask && isValidDescTask;
    };

    _handleDatesChange = (evt) => {
        const value = evt.target.value;
        this.setState((state) => ({
            selectedDates: value,
            validForm: this._validateForm(Object.assign(state, { selectedDates: value }))
        }));
    };

    _handleDateNoLimitChange = () => {
        this.setState((state) => ({
            isCheckedDateNoLimit: !state.isCheckedDateNoLimit
        }));
    };

    _handleTitleTaskChange = (evt) => {
        const value = evt.target.value;
        this.setState((state) => ({
            titleTask: value,
            validForm: this._validateForm(Object.assign(state, { titleTask: value }))
        }));
    };

    _handleDescTaskChange = (data) => {
        this.setState((state) => ({
            descTask: data,
            validForm: this._validateForm(Object.assign(state, { descTask: data }))
        }));
    };

    _handleSelectChange = (evt) => {
        const value = evt.target.value;
        this.setState((state) => ({
            valueSelect: value,
            validForm: this._validateForm(Object.assign(state, { valueSelect: value }))
        }));
    };

    handleSubmitForm = (evt) => {
        evt.preventDefault();
        const formData = new FormData(evt.target);

        addTask(formData)
            .then(result => {
                showMessage(result.msgsType, '', result.textMsgs);
                if (result.msgsType === 'success') {
                    this.setState({
                        isCheckedDateNoLimit: false,
                        valueSelect: "disabled",
                        titleTask: "",
                        validForm: false,
                    })

                    clearDataEditor();
                    clearDataFlatpickr();
                }
            })
            .catch(e => {
                console.error(e);
                showMessage(TypeMessage.ERROR, e, 'Произошла ошибка.');
            });
    };
}

const mapStateToProps = (state) => ({
    user: state.user,
    users: state.users
})

const mapDispatchToProps = (dispatch) => {
    return {
        getAllUsersDispatch: (users) => {
            dispatch(allUsers(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormAddTask);
