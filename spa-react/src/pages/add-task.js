import React from "react";
import FormAddTask from "../components/forms/form-add-task";

const pageAddTask = (props) => {
    return (
        <FormAddTask changeActivePage={props.changeActivePage}/>
    )
};
export default pageAddTask