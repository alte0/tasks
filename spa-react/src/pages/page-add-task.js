import React from "react";
import FormAddTask from "../components/forms/form-add-task";

import { Redirect } from "react-router-dom";

const PageAddTask = (props) => {
    const { isLoggedIn, user } = props;

    if (!isLoggedIn) {
        return (<Redirect to="/sing-in" />)
    }

    return (
        <FormAddTask
              user={user} />
    )
};
export default PageAddTask
