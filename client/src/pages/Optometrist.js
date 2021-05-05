import React from "react";
import Footer from "../components/Footer";
import PatientSearch from "../components/Forms/PatientSearch";
import TopbarOptom from "../components/Topbar/TopbarOptom";

const Optometrist = (props) => {
    return (
        <>
        <TopbarOptom />
        <PatientSearch  optom={props.optom}/>
        <Footer/>
        </>
    )
}

export default Optometrist
