import React, { useState, useEffect } from 'react'
import API from '../../utils/API';
import PatientSymptoms from '../Patients';
import "./PatientSearch.css"


const PatientSearch = () => {
    
    const [patientSearch, setPatientSearch] = useState({
        name: "",
        email: "",
        birthday: ""
    });
    const [patient, setPatient] = useState()

    function handleInputChange(event) {
        const { name, value } = event.target;
        setPatientSearch({ 
            ...patientSearch,
            [name]: value
        })
        console.log("patient search:", patientSearch)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        API.findPatient({
            name: patientSearch.name,
            email: patientSearch.email,
            birthday: patientSearch.birthday
        })
        .then((res) => { 
            console.log("Patient response", res)
            setPatient(res.data)
            // document.querySelector(".patientSymptoms")
            // .appendChild(renderPatient());
            setPatientSearch({
                name: "", 
                email: "",
                birthday: ""
            })
        })
        .then(() => {
            console.log("patient search:", patientSearch)
           
        })
        .catch(err => console.log(err));
    }

    // useEffect(() => {
    //     alert("State updated")
    // }, [patient])

    // const renderPatient = () => {
    //     return (
            
    //     )
    // }

    // useEffect(() => {
    //     getPatientSymptoms();
    // }, [getSymptoms])

    // const getPatientSymptoms = () => {
    //     API.loadPatient()
    //     .then(res => {
    //         setGetSymptoms(res.data)
    //         console.log("searchPatient", res.data);
    //     })
    //     .catch(err => console.log(err));
    // }


    return (
        <>
            <div className="searchDiv">
                <div className="row">
                <form className="patientSearchForm" onSubmit={handleFormSubmit}>
                <h2 className="searchTitle">Search for a patient</h2>
                <div className="row">
                    <div className="form-floating mb-3 col">
                        <input onChange={handleInputChange} name="name" type="text" className="form-control" id="floatingInput" placeholder="Name"/>
                        <label htmlFor="floatingInput"> Full Name</label>
                    </div>
                    <div className="form-floating mb-3 col">
                        <input onChange={handleInputChange} name="email" type="email" className="form-control" id="floatingEmail" placeholder="Email"/>
                        <label htmlFor="floatingPassword"> Email</label>
                    </div>
                    <div className="form-floating mb-3 col">
                        <input onChange={handleInputChange} name="birthday" type="text" className="form-control" id="floatingBirthday" placeholder="dd/mm/yyyy"/>
                        <label htmlFor="floatingPassword"> Date of birth (dd/mm/yyyy)</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-default searchBtn">Search</button>
                </form>
                </div>
            </div>   

            <div className="patientSymptoms">
                    {patient ?  <PatientSymptoms patient={patient}/> : null}
                </div>
                    
          
   
        </>
    )
}

export default PatientSearch;
