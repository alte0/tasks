import React from "react";

export default function SearchByTasks(props) {
    return (
        <form 
            onSubmit={props.handleSubmitFormSearch}
            className="form form_search" method="get">
            <h3 className="form__title visually-hidden">Поиск по задачам.</h3>
            <div className="form__row form__row_search">
                <input className="form__input form__input_search" type="search" name="search-field" placeholder="Поиск по задачам"
                    value={props.textSearch}
                    onChange={props.handleChangeTextSearch}
                />
                <button className="form__button submit" type="submit">Найти</button>
            </div>
        </form>
    )
}




