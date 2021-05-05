import React from "react"
import DiagnosisForm from "../components/Forms/DiagnosisForm";
import Navbar from "../components/Navbar/Navbar";
import Brochures from "../components/Diagnosis/Brochures"
import Footer from "../components/Footer";

function Diagnosis() {
    return (
        <>
            <Navbar />
            <DiagnosisForm />
            <Brochures/>
            <Footer/>
        </>
    )
}

export default Diagnosis
