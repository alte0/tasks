import React from "react";
import FormSingIn from "../components/forms/form-sing-in";

const ScreenSingIn = (props) => {
    return (
        <FormSingIn
            changeActivePage={props.changeActivePage}
        />
    )
};
export default ScreenSingIn