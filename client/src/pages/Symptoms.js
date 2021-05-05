import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import NewSymptom from "../components/Symptoms/NewSymptom";

function Symptoms() {
    return(
        <>
            <Navbar />
            <NewSymptom />
            <Footer/>
        </>
    )
}
export default Symptoms;