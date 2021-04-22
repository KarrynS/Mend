import React, { useState } from 'react'
import API from '../../utils/API';
import "./PatientSearch.css"


const PatientSearch = () => {
    
    const [patientSearch, setPatientSearch] = useState({
        name: "",
        email: "",
        birthday: ""
    });

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
        .then(() => setPatientSearch({
            name: "", 
            email: "",
            birthday: ""
        }))
        .then(() => {
            console.log("patient search:", patientSearch)
        })
        .catch(err => console.log(err));
    }

    


    return (
        <>
            <div className="searchDiv">
                <form className="patientSearchForm" onSubmit={handleFormSubmit}>
                <h2 className="searchTitle">Search for a patient</h2>
                <div className="form-floating mb-3">
                    <input onChange={handleInputChange} name="name" type="text" className="form-control" id="floatingInput" placeholder="Name"/>
                    <label htmlFor="floatingInput">Full Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleInputChange} name="email" type="email" className="form-control" id="floatingEmail" placeholder="Email"/>
                    <label htmlFor="floatingPassword">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleInputChange} name="birthday" type="text" className="form-control" id="floatingBirthday" placeholder="dd/mm/yyyy"/>
                    <label htmlFor="floatingPassword">Date of birth (dd/mm/yyyy)</label>
                </div>
                <button type="submit" className="btn btn-default searchBtn">Search</button>
                </form>
            </div>   
        </>
    )
}

export default PatientSearch;
