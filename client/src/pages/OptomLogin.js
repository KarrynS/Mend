import Topbar from "../components/Topbar/Topbar";
import OptomLoginForm from "../components/Forms/OptometristLogin"
import React from "react";
import Footer from "../components/Footer";

const OptomLogin = (props) => {
    return (
        <>
         <Topbar />
         < OptomLoginForm setOptomLoggedIn={props.setOptomLoggedIn} setOptom={props.setOptom}/>   
        <Footer />
        </>
    )
}

export default OptomLogin;

