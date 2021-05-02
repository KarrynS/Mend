import React from "react";
import Topbar from "../components/Topbar/Topbar";
import LoginForm from  "../components/Forms/LoginForm";

function Login(props) {
    return (
        <>
            <Topbar />
            <LoginForm setIsLoggedIn={props.setIsLoggedIn}/>
        </>
    )
}

export default Login;