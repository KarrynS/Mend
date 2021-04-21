import React from "react";
import Navbar from "../components/Navbar/Navbar";
import NewSymptom from "../components/Forms/NewSymptom";
import SavedSymptoms from "../components/Symptoms/index"


function Symptoms() {
    return(
        <>
            <Navbar />
            <NewSymptom />
            <SavedSymptoms />
        </>
    )
}
export default Symptoms;