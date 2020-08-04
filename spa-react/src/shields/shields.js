import { Redirect, Route } from "react-router-dom";
import React from "react";
import { checkLoggedUser } from "../helpers/helpers";

export function PrivatePage({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                checkLoggedUser() ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/sing-in",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export function ProtectPage({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                !checkLoggedUser() ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
