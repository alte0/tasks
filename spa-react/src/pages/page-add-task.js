import React from "react";
import FormAddTask from "../components/forms/form-add-task";

import { Redirect } from "react-router-dom";

const PageAddTask = (props) => {
    const { isLoggedIn } = props;

    if (!isLoggedIn) {
        return (<Redirect to="/sing-in" />)
    }

    return (
        <FormAddTask />
    )
};
export default PageAddTask