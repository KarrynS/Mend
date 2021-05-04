import React from "react";
import PatientSearch from "../components/Forms/PatientSearch";
import TopbarOptom from "../components/Topbar/TopbarOptom";

const Optometrist = (props) => {
    return (
        <>
        <TopbarOptom />
        <PatientSearch  optom={props.optom}/>
        </>
    )
}

export default Optometrist
