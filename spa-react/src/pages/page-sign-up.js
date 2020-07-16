import React from "react";
import FormSingUp from "../components/forms/form-sing-up";
import { Redirect } from "react-router-dom";
import { checkLoggedUser} from "../helpers/helpers";


const PageSingUp = () => {
    if (checkLoggedUser()) {
        return (<Redirect to="/" />)
    }

    return (
        <FormSingUp/>
    )
};
export default PageSingUp
