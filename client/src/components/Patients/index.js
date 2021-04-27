import "./style.css";
import React from 'react'
import ShowSymptoms from "./ShowSymptoms";

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
        <div className="row">
            <div className="patientSymptomDiv col-6">
                <h5> Symptoms recorded for :  {patient.name}</h5>
                <ul>
                    {patient.symptoms.map(symptom => {
                        return (
                            <ShowSymptoms symptom={symptom}/>
                         )
                    })}
    
                </ul>
            </div>
            
         {/* <p> Birthday {props.patient.birthday}</p>
         <p> Email {props.patient.email}</p> */}
         </div>
        </>
    )
}

export default PatientSymptoms;
