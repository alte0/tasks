import React from "react";
import FormSingIn from "../components/forms/form-sing-in";

const pageSingIn = (props) => {
    return (
        <FormSingIn
            changeActivePage={props.changeActivePage}
            getUserData={props.getUserData}
            getTasksData={props.getTasksData}
        />
    )
};
export default pageSingIn