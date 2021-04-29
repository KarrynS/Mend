import "./style.css";
import React from 'react'
import ShowSymptoms from "./ShowSymptoms";
import TreatementPlan from "./TreatmentPlan"

const PatientSymptoms = ({patient}) => {
    // const { name, birthday } = props.patient
    // const [patient, setPatient] = useState();

    // useEffect(() => {
    //     props.patient ? setPatient(props.patient) : console.log("patient undefined")
    
    // },[patient] ) 

    console.log("patient props", patient)
    console.log("patientSymptoms props.symptoms", patient.symptoms)
    
    return (
        <>
            <div className="pxsymptomDiv">
                <h5> Patient:  {patient.name}</h5>
                
                    {patient.symptoms.map(symptom => {
                        return (
                            <ShowSymptoms symptom={symptom}/>
                         )
                    })}
                
            
            </div>
            <TreatementPlan patient={patient}/>
         {/* <p> Birthday {props.patient.birthday}</p>
         <p> Email {props.patient.email}</p> */}
      
        </>
    )
}

export default PatientSymptoms;
