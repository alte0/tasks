import React, {Component} from "react";
import "./forms.scss";

import {initFlatpickr} from "../../plugins/flatpickr";
import {initEditor} from "../../plugins/editor";
import {checkLengthMinMaxStr} from "../../helpers/helpers";
import {ConfMinAndMaxAddTask} from "../../vars/vars";

class FormAddTask extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            selectedDates: "",
            isCheckedDateNoLimit: false,
            valueSelect: "disabled",
            titleTask: "",
            descTask: "",
            validForm: false
        };
        this.state = this.initialState;

        this.inputDatesRef = React.createRef();
        this.textareaRef = React.createRef();
    }

    componentDidMount() {
        initFlatpickr(this.inputDatesRef.current);
        initEditor(this.textareaRef.current, this._handleDescTaskChange);
    }

    render() {
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
                            className="form__date"
                            onInput={this._handleDatesChange}
                            id="date" type="text" name="date"
                            placeholder="выберите дату или даты" data-input="data-input" required="required"/>
                        <button type="button" title="Открыт/Закрыть календарь" data-toggle="">календарь</button>
                        <button type="button" title="Очистить календарь" data-clear="">очистить</button>
                    </div>
                </div>
                <div className="form__row">
                    <input
                        onChange={this._handleDateNoLimitChange}
                        checked={this.state.isCheckedDateNoLimit}
                        type="checkbox" name="date-no-limit" id="date-no-limit"/>
                    <label htmlFor="date-no-limit">Без даты окончания (дата окончания выбранная выше, будет игнорирована)</label>
                </div>
                <div className="form__row form__row_content-column">
                    <span>Выберите исполнителя</span>
                    <select
                        value={this.state.valueSelect}
                        onChange={this._handleSelectChange}
                        className="form__list-users" name="executor" required="required">
                        <option value="disabled" disabled="disabled">Не выбрано</option>
                        <option value="1">User</option>
                    </select>
                </div>
                <div className="form__row form__row_content-column">
                    <label>Загаловок задачи</label>
                    <textarea
                        value={this.state.titleTask}
                        onChange={this._handleTitleTaskChange}
                        className="form__title-add" type="date" name="title" maxLength="255" placeholder="сделать ..." required="required" />
                </div>
                <div className="form__row form__row_content-column">
                    <label>Дополнительная информация по задаче</label>
                    <textarea
                        ref={this.textareaRef}
                        value={this.state.descTask}
                        onChange={this._handleDescTaskChange}
                        id="textarea-text" name="text" maxLength="1000" placeholder="Обьяснение задачи ..." required="required" />
                </div>
                <div className="form__row">
                    <button
                        disabled={!this.state.validForm}
                        className="form__submit"
                        type="submit">Добавить задачу</button>
                    <a
                        className="form__link"
                        onClick={this._handleClick}
                        href="/tasks.html">К списку задач</a>
                </div>
            </form>
        )
    }

    _validateForm = (state) => {
        const {selectedDates, valueSelect, titleTask, descTask} = state;
        const isValidValueSelect = valueSelect !== "disabled";
        const isValidTitleTask= checkLengthMinMaxStr(titleTask, ConfMinAndMaxAddTask.MIN_LENGTH_TEXT, ConfMinAndMaxAddTask.MAX_LENGTH_TEXT_TITLE);
        const isValidDescTask = checkLengthMinMaxStr(descTask, ConfMinAndMaxAddTask.MIN_LENGTH_TEXT, ConfMinAndMaxAddTask.MAX_LENGTH_TEXT_DESK);

        return selectedDates && isValidValueSelect && isValidTitleTask && isValidDescTask;
    };

    _handleDatesChange = (evt) => {
        const value = evt.target.value;
        this.setState({
            selectedDates: value,
            validForm: this._validateForm(Object.assign(this.state, {selectedDates: value}))
        });
    };

    _handleDateNoLimitChange = () => {
        this.setState({
            isCheckedDateNoLimit: !this.state.isCheckedDateNoLimit
        });
    };

    _handleTitleTaskChange = (evt) => {
        const value = evt.target.value;
        this.setState({
            titleTask: value,
            validForm: this._validateForm(Object.assign(this.state, {titleTask: value}))
        });
    };

    _handleDescTaskChange = (data) => {
        this.setState({
            descTask: data,
            validForm: this._validateForm(Object.assign(this.state, {descTask: data}))
        });
    };

    _handleSelectChange = (evt) => {
        const value = evt.target.value;
        this.setState({
            valueSelect: value,
            validForm: this._validateForm(Object.assign(this.state, {valueSelect: value}))
        });
    };

    handleSubmitForm = (evt) => {
        evt.preventDefault();
        console.log(evt.target);
        console.log(new FormData(evt.target));
        alert('fake data');
    };

    _handleClick = (evt) => {
        evt.preventDefault();
        const page = 4;
        this.props.changeActivePage(page);
    };
}

export default FormAddTask