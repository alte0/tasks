import React from "react";
import FormSingIn from "../components/forms/form-sing-in";
import { Redirect } from "react-router-dom";
import { checkLoggedUser} from "../helpers/helpers";


const PageSingIn = ({
        getFullName
    }) => {

    if (checkLoggedUser()) {
        return (<Redirect to="/" />)
    }

    return (
        <FormSingIn
            getFullName={getFullName}
        />
    )
};
export default PageSingIn
