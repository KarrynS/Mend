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
            <h3>Patient: {patient.name}</h3>
            <div className="symptomDiv col-4">
                <h5> Symptoms recorded :</h5>
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
        </>
    )
}

export default PatientSymptoms;
