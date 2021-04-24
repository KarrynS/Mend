import "./style.css";
import React, {useState, useEffect} from 'react'

const PatientSymptoms = ({patient}) => {
    // const { name, birthday } = props.patient
    // const [patient, setPatient] = useState();

    // useEffect(() => {
    //     props.patient ? setPatient(props.patient) : console.log("patient undefined")
    
    // },[patient] ) 


    console.log("patient props", patient)
    // console.log("Props.name", props.name)
    // console.log("Props.symptoms", props.symptoms)
    return (
        <>
         <h5>Patients Name goes here : {patient.name}</h5>   
         {/* <p> Birthday {props.patient.birthday}</p>
         <p> Email {props.patient.email}</p> */}
        </>
    )
}

export default PatientSymptoms;
