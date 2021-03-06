import React, { useState } from 'react'
import API from '../../utils/API';
import PatientSymptoms from '../Patients';
import "./PatientSearch.css"


const PatientSearch = (props) => {
    console.log("optom", props.optom)
    
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

    return (
        <>
        <div className="optomAppInfo">
            <div className="row">
                <div className="col-4">
                    <h3>Welcome {props.optom.name}</h3>
                </div>
                <div className="col-4">
                    <p>Search for your patients below and keep up to date of their eye issues.</p>
                </div>
                <div className="col-4">
                    <p>Easily record your diagnosis and suggested treatment and we'll send them directly to your patients.</p>
                </div>
            </div>
        </div>
            <div className="searchDiv">
                <div className="row">
                <form className="patientSearchForm" onSubmit={handleFormSubmit}>
                <h2 className="searchTitle">Patient Search</h2>
                <div className="row">
                    <div className="form-floating mb-3 col">
                        <input onChange={handleInputChange} value={patientSearch.name} name="name" type="text" className="form-control" id="floatingInput" placeholder="Name"/>
                        <label htmlFor="floatingInput"> Full Name</label>
                    </div>
                    <div className="form-floating mb-3 col">
                        <input onChange={handleInputChange} value={patientSearch.email} name="email" type="email" className="form-control" id="floatingEmail" placeholder="Email"/>
                        <label htmlFor="floatingPassword"> Email</label>
                    </div>
                    <div className="form-floating mb-3 col">
                        <input onChange={handleInputChange} value={patientSearch.birthday} name="birthday" type="text" className="form-control" id="floatingBirthday" placeholder="dd/mm/yyyy"/>
                        <label htmlFor="floatingPassword"> Date of birth</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-default searchBtn" id="pxsearchBtn">Search</button>
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
