import React, {useState} from 'react';
import API from '../../utils/API';
import "./treatmentplan.css"

const ManagementPlan = (props) => {
    console.log("patient props", props.patient, props.patient._id)
    const [patientId, setPatientId] = useState(props.patient._id);

    const [formObject, setformObject] = useState({
        diagnosis: "",
        treatment: "", 
        review: "",
        patientId: patientId
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

        API.newManagement(
            {
                diagnosis: formObject.diagnosis,
                treatment: formObject.treatment,
                review: formObject.review,
                patient: patientId
            }
        )
       .then(() => {
            setformObject({
                diagnosis: "",
                treatment: "", 
                review: "",
                patient: ""
            })
        })
        
       .catch(err => console.log(err))
       console.log("New Management added", formObject)
       console.log("patientId" ,patientId)
        alert("Treatment plan recorded")
       
    }

    // const submitPlanModal = () => {
    //     return (
    //         <>
    //             <div className="modal" id="exampleModal" tabindex="-1" role="dialog">
    //                 <div className="modal-dialog" role="document">
    //                     <div className="modal-content">
    //                     <div className="modal-header">
    //                         <h5 className="modal-title">//Optom Name here//</h5>
    //                         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
    //                         <span aria-hidden="true">&times;</span>
    //                         </button>
    //                     </div>
    //                     <div className="modal-body">
    //                         <p>We have submitted your plan which {props.patient.name} will now be able to view</p>
    //                     </div>
    //                     <div className="modal-footer">
    //                         <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
    //                     </div>
    //                     </div>
    //                 </div>
    //                 </div>
    //         </>
    //     )
    // }

    // onClick={submitPlanModal()}

    return (
        <>
            <div className="treatmentDiv">
            <h1>Management Plan</h1>   
            <form onSubmit={handleFormSubmit} >
                <div className="form-group row">
                    <label htmlFor="Diagnosis" className="col-sm-2 col-form-label">Diagnosis:</label>
                    <div className="col-sm-10">
                    <input onChange={handleInputChange} value={formObject.diagnosis} name="diagnosis" type="text" className="form-control" id="inputdiagnosis" placeholder="Enter Diagnosis"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="Management" className="col-sm-2 col-form-label">Treatment:</label>
                    <div className="col-sm-10">
                    <textarea onChange={handleInputChange} value={formObject.treatment} name="treatment" type="text" row="3" className="form-control" id="inputmanagement" placeholder="Enter Management Plan"></textarea>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="example-date-input" className="col-2 col-form-label">Review Date:</label>
                    <div className="col-sm-10">
                    <input onChange={handleInputChange} value={formObject.review}name="review" type="text" className="form-control" id="inputreview" placeholder="Suggested review schedule"/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                    <button  type="submit button" className="btn btn-primary mxplanBtn" data-toggle="modal" data-target="#exampleModal">Submit Plan</button>
                    </div>
                </div>
                </form> 
                
            </div>   
        </>
    )
}

export default ManagementPlan;
