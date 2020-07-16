import React from "react";
import FormAddTask from "../components/forms/form-add-task";

import { Redirect } from "react-router-dom";
import { checkLoggedUser } from '../helpers/helpers'

const PageAddTask = (props) => {
    const { user } = props;

    if (!checkLoggedUser()) {
        return (<Redirect to="/sing-in" />)
    }

    return (
        <FormAddTask
              user={user} />
    )
};
export default PageAddTask
