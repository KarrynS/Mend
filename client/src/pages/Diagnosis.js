import React from "react"
import DiagnosisForm from "../components/Forms/DiagnosisForm";
import Navbar from "../components/Navbar/Navbar";
import Brochures from "../components/Diagnosis/Brochures"

function Diagnosis() {
    return (
        <>
            <Navbar />
            <DiagnosisForm />
            <Brochures/>
        </>
    )
}

export default Diagnosis
