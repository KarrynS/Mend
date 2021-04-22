
import React, { useState, useEffect } from "react";
import "./Diagnosis.css";

function DiagnosisForm() {

    const [diagnosis, setDiagnosis] = useState();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setDiagnosis(e.target.value)
        console.log('diagnosis', diagnosis);
    }

     
    const loadDiagnosis = () => {
        console.log("setDiagnosis", setDiagnosis)
    }

    return (
        <>

        <div className="backgroundImg">
            <div className="container">
            <form className="form-inline" onSubmit={handleFormSubmit}>
            <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Select a Diagnosis</label>
            <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                <option defaultValue>Choose a diagnosis...</option>
                <option onChange={e => setDiagnosis(e.target.value)}  value="cataract">Cataract</option>
                <option onChange={e => setDiagnosis(e.target.value)}  value="conjunctivits">Conjunctivitis</option>
                <option onChange={e => setDiagnosis(e.target.value)}  value="Keratitis">Keratitis</option>
            </select>
            <button type="submit" className="btn btn-primary my-1">Find out more</button>
        </form>  
            </div>
        </div>
          
        </>
    )
}

export default DiagnosisForm;
