import React from "react";
import FormSingUp from "../components/forms/form-sing-up";
import { Redirect } from "react-router-dom";

const PageSingUp = (props) => {
    if (props.isLoggedIn) {
        return (<Redirect to="/" />)
    }
    
    return (
        <FormSingUp/>
    )
};
export default PageSingUp