import React from "react";
import FormSingIn from "../components/forms/form-sing-in";

const pageSingIn = (props) => {
    return (
        <FormSingIn
            changeActivePage={props.changeActivePage}
            changeUserData={props.changeUserData}
        />
    )
};
export default pageSingIn