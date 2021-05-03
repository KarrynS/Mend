import React from "react";
import Topbar from "../components/Topbar/Topbar";
import LoginForm from  "../components/Forms/LoginForm";

function Login(props) {
    console.log("props.location", props)
    return (
        <>
            <Topbar />
            <LoginForm setIsLoggedIn={props.setIsLoggedIn}/>
        </>
    )
}

export default Login;