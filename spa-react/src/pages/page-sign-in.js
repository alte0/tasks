import React from "react";
import FormSingIn from "../components/forms/form-sing-in";
import { Redirect } from "react-router-dom";

const PageSingIn = ({ 
        isLoggedIn, 
        getFullName,
        setLoggedIn
    }) => {
    
    if (isLoggedIn) {
        return (<Redirect to="/" />)
    }

    return (
        <FormSingIn
            getFullName={getFullName}
            setLoggedIn={setLoggedIn}
        />
    )
};
export default PageSingIn