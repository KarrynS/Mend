import React, {useState} from 'react';
import API from '../../utils/API';
import "./treatmentplan.css"

const ManagementPlan = (props) => {
    console.log("patient props", props.patient, props.patient._id)

    const [formObject, setformObject] = useState({
        diagnosis: "",
        treatment: "", 
        date: "",
        id: ""
    })

    function handleInputChange(event) {
        const {name,value} = event.target;
        setformObject({
            ...formObject, 
            [name]: value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("management plan", formObject)
        API.submitPlan(
            {
                diagnosis: formObject.diagnosis,
                treatment: formObject.treatment,
                date: formObject.date,
                id: props.patient._id
            }
        )
       .then(() => setformObject({
            diagnosis: "",
            treatment: "", 
            date: "",
            id: ""
       }))
       .then(() => {
           console.log("treatment plan data", formObject);
           alert("Treatment plan recorded")
       })
       .catch(err => console.log(err))
    }
    return (
        <>
            <div className="treatmentDiv">
            <h1>Management Plan</h1>   
            <form onSubmit={handleFormSubmit}>
                <div class="form-group row">
                    <label htmlFor="Diagnosis" class="col-sm-2 col-form-label">Diagnosis:</label>
                    <div class="col-sm-10">
                    <input onChange={handleInputChange} name="diagnosis" type="text" class="form-control" id="inputdiagnosis" placeholder="Enter Diagnosis"/>
                    </div>
                </div>
                <div class="form-group row">
                    <label htmlFor="Management" class="col-sm-2 col-form-label">Treatment:</label>
                    <div class="col-sm-10">
                    <textarea onChange={handleInputChange} name="treatment" type="text" row="3" class="form-control" id="inputmanagement" placeholder="Enter Management Plan"></textarea>
                    </div>
                </div>
                <div class="form-group row">
                    <label htmlFor="example-date-input" class="col-2 col-form-label">Review Date:</label>
                    <div class="col-sm-10">
                    <input onChange={handleInputChange} name="date" type="text" class="form-control" id="inputreview" placeholder="Suggested review schedule"/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                    <button  type="submit" class="btn btn-primary mxplanBtn">Submit Plan</button>
                    </div>
                </div>
                </form> 
                
            </div>   
        </>
    )
}

export default ManagementPlan;
