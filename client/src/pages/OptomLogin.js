import Topbar from "../components/Topbar/Topbar";
import OptomLoginForm from "../components/Forms/OptometristLogin"
import React from "react";

const OptomLogin = (props) => {
    return (
        <>
         <Topbar />
         < OptomLoginForm setOptomLoggedIn={props.setOptomLoggedIn}/>   
        </>
    )
}

export default OptomLogin;

