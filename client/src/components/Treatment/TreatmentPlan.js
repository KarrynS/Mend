import React, { useState,  useEffect } from 'react'
import API from "../../utils/API";
import "./Treatmentplan.css";

const TreatmentPlan = () => {
    const [managementPlans, setManagementPlans] = useState([]);

    const [user, setUser] = useState("")

    // Loading User 
    function loadTreatmentPlan() {
        API.loadTreatment()
        .then(res => {
            setUser(res.data);
            console.log("Plan:", res.data)
            console.log(user)
        })
        .catch(err => console.log(err));
        
    }

    useEffect(() => {
        loadTreatmentPlan();
        console.log("tx plan loaded", user)
      
    }, [])

    console.log("plan", user)

    //getting managements Plans for user
    useEffect(() => {
        loadSavedPlan();
    }, [])

    const loadSavedPlan = () => {
        API.loadManagementPlan()
        .then(res => {
            setManagementPlans(res.data)
            console.log("load Mx Plan", res.data) ;
        })
        .catch(err => console.log(err));
    }
        

    // Deleting management plan (by id)
    function removeSavedPlan(id) {
        console.log("Mx plan Id", id)
        API.deleteSavedPlan(id)
        .then(res => loadSavedPlan())
        .catch(err => console.log(err));
    }

        return (
          
            <>

                <p className="MxHeading"><h2 className="MxTitle">Management plan for :&nbsp; </h2>{user.name}</p>

                {console.log("checking to see data format ", managementPlans)}
              {managementPlans.length > 0 ? managementPlans.map(managementPlan => {
                  return (
                    <>
                        <div className="jumbotron jumbotron-fluid">
                            <div className="treatmentcontainer">
                                <h2 className="display-4 mxPlanTitle">Treatment Plan</h2>
                                <p className="lead mxdiagnosis"><h5 className="mxdiagnosisTitle"><i class="fa fa-plus" aria-hidden="true">&nbsp;</i>Diagnosis : </h5> {managementPlan.diagnosis}</p>
                                <hr className="my-4"/>
                                <p className="mxtreatment"><h5 className="mxdiagnosisTitle"><i class="fa fa-user-md" aria-hidden="true">&nbsp;</i>Treatment advice: </h5>{managementPlan.treatment}</p>
                                <p className="mxdate"><h5 className="mxdiagnosisTitle"><i class="fa fa-calendar-o" aria-hidden="true">&nbsp;</i>Recommended review date: </h5>{managementPlan.review}</p>
                                <div className="MxDeleteBtnDiv">
                                    <button onClick={() => removeSavedPlan(managementPlan._id)} className="btn btn-primary MxDeleteBtn" value={managementPlan._id}>Delete Plan</button>
                                </div>
                            </div>
                        </div>
                    </>
                  )
              }) : 
                <div className="waitingDiv">
                    <h5 className="waitingMessage">No active Treatments Plans submitted by the optometrist</h5>
                </div>
              
              }
               
            </>
        )
 
    
}

export default TreatmentPlan;
