import React from "react";
import FormSingIn from "../components/forms/form-sing-in";

const pageSingIn = (props) => {
    return (
        <FormSingIn
            changeActivePage={props.changeActivePage}
            getData={props.getData}
        />
    )
};
export default pageSingIn