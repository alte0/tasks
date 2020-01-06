import React from "react";
import FormAddTask from "../components/forms/form-add-task";

const ScreenAddTask = (props) => {
    return (
        <FormAddTask changeActivePage={props.changeActivePage}/>
    )
};
export default ScreenAddTask