import "./style.css";
import React from 'react'
import ShowSymptoms from "./ShowSymptoms";
import ManagementPlan from "./ManagementPlan"

const PatientSymptoms = ({patient}) => {
    
    return (
        <>
            <div className="pxsymptomDiv">
            <h3 className="pxsymptomDivTitle"> Symptoms for patient :  {patient.name}</h3>
                
                    {patient.symptoms.map(symptom => {
                        return (
                            <ShowSymptoms symptom={symptom}/>
                         )
                    })}
            </div>
            <ManagementPlan patient={patient}/>
        </>
    )
}

export default PatientSymptoms;
