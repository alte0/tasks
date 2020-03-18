import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SearchByTasks extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            textSearch: props.textSearch || '',
            valid: false
        };
        this.state = this.initialState;

        this._handleChangeTextSearch = this._handleChangeTextSearch.bind(this);
        this._handleSubmitFormSearch = this._handleSubmitFormSearch.bind(this);
    }

    render() {
        return (
            <form 
                onSubmit={this._handleSubmitFormSearch}
                className="form form_search" method="get">
                <h3 className="form__title visually-hidden">Поиск по задачам.</h3>
                <div className="form__row form__row_search">
                    <input className="form__input form__input_search" type="search" name="search-field" placeholder="Поиск по задачам"
                        value={this.state.textSearch}
                        onChange={this._handleChangeTextSearch}
                    />
                    <button 
                        disabled={!this.state.valid}
                        className="form__button submit" 
                        type="submit">Найти</button>
                </div>
            </form>
        )
    }

    _handleChangeTextSearch(evt) {
        const value = evt.target.value;
        this.setState({
            textSearch: value,
            valid: Boolean(value.trim())
        })
    }

    _handleSubmitFormSearch(evt) {
        evt.preventDefault();
        this.props.history.push(`/search?q=${encodeURIComponent(this.state.textSearch.trim())}`)
    }
}

export default withRouter(SearchByTasks);
