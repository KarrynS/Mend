import React, { useState,  useEffect } from 'react'
import API from "../../utils/API";
import "./Treatmentplan.css";

const TreatmentPlan = () => {
    const [managementPlans, setManagementPlans] = useState([]);

    const [plan, setPlan] = useState("")

    function loadTreatmentPlan() {
        API.loadTreatment()
        .then(res => {
            setPlan(res.data);
            console.log("Plan:", res.data)
            console.log(plan)
        })
        .catch(err => console.log(err));
        
    }

    useEffect(() => {
        loadTreatmentPlan();
        console.log("tx plan loaded", plan)
      
    }, [])

    console.log("plan.management", plan)


    //getting managements 
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
        

        return (
          
            <>

                <p className="MxHeading"><h2 className="MxTitle">Management plan for :&nbsp; </h2>{plan.name}</p>

              {managementPlans.map(managementPlan => {
                  return (
                    <>
                        <div className="jumbotron jumbotron-fluid">
                            <div className="treatmentcontainer">
                                <h2 className="display-4 mxPlanTitle">Treatment Plan</h2>
                                <p className="lead mxdiagnosis"><h5 className="mxdiagnosisTitle"><i class="fa fa-plus" aria-hidden="true">&nbsp;</i>Diagnosis : </h5> {managementPlan.diagnosis}</p>
                                <hr className="my-4"/>
                                <p className="mxtreatment"><h5 className="mxdiagnosisTitle"><i class="fa fa-user-md" aria-hidden="true">&nbsp;</i>Treatment advice: </h5>{managementPlan.treatment}</p>
                                <p className="mxdate"><h5 className="mxdiagnosisTitle"><i class="fa fa-calendar-o" aria-hidden="true">&nbsp;</i>Recommended review date: </h5>{managementPlan.review}</p>
                            </div>
                        </div>
                    </>
                  )
              })}
               
            </>
        )
 
    
}

export default TreatmentPlan;
