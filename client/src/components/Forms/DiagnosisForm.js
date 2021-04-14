import React from "react";
import "./Diagnosis.css";

const DiagnosisForm = () => {
    return (
        <>
         <form class="form-inline">
            <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Select a Diagnosis</label>
            <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                <option selected>Choose...</option>
                <option value="cataract">Cataract</option>
                <option value="conjunctivits">Conjunctivitis</option>
                <option value="Keratitis">Keratitis</option>
            </select>

            <div class="custom-control custom-checkbox my-1 mr-sm-2">
                <input type="checkbox" class="custom-control-input" id="customControlInline"/>
            </div>

            <button type="submit" class="btn btn-primary my-1">Find out more</button>
        </form>   
        </>
    )
}

export default DiagnosisForm;
