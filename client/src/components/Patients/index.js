import "./style.css";
import React from 'react'
import ShowSymptoms from "./ShowSymptoms";
import ManagementPlan from "./ManagementPlan"

const PatientSymptoms = ({patient}) => {
    // const { name, birthday } = props.patient
    // const [patient, setPatient] = useState();

    // useEffect(() => {
    //     props.patient ? setPatient(props.patient) : console.log("patient undefined")
    
    // },[patient] ) 

    // console.log("patient props", patient)
    // console.log("patientSymptoms props.symptoms", patient.symptoms)
    
    return (
        <>
            <div className="pxsymptomDiv">
                <h3 className="pxsymptomDivTitle"> Results for :  {patient.name}</h3>
                
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
