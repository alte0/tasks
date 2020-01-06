import React from "react";
import FormSingUp from "../components/forms/form-sing-up";

const ScreenSingUp = (props) => {
    return (
        <FormSingUp changeActivePage={props.changeActivePage}/>
    )
};
export default ScreenSingUp