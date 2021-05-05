import React from "react";
import Topbar from "../components/Topbar/Topbar";
import SignUpForm from "../components/Forms/SignUpForm";
import Footer from "../components/Footer";

function SignUp() {
    return(
        <>
           <Topbar />
             <SignUpForm />
             <Footer/>
        </>
    )
}

export default SignUp;