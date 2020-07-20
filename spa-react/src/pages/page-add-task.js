import React from "react";
import FormAddTask from "../components/forms/form-add-task";

import { Redirect } from "react-router-dom";
import { checkLoggedUser } from '../helpers/helpers'

const PageAddTask = () => {

    if (!checkLoggedUser()) {
        return (<Redirect to="/sing-in" />)
    }

    return (
        <FormAddTask />
    )
};
export default PageAddTask
