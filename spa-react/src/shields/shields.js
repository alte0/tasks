import { Redirect } from "react-router-dom";
import React from "react";
import { checkLoggedUser } from "../helpers/helpers";

export const PrivatePage = (props) => {
    if (!checkLoggedUser()){
        return <Redirect to="/sing-in" />
    }

    return props.children;
}

export const ProtectPage = (props) => {
    if (checkLoggedUser()){
        return <Redirect to="/" />
    }

    return props.children;
}
