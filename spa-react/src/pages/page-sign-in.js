import React from "react";
import FormSingIn from "../components/forms/form-sing-in";
import { Redirect } from "react-router-dom";
import { checkLoggedUser} from "../helpers/helpers";


const PageSingIn = () => {

    if (checkLoggedUser()) {
        return (<Redirect to="/" />)
    }

    return (
        <FormSingIn />
    )
};
export default PageSingIn
