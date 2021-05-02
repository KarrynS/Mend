import React, { useState,  useEffect } from 'react'
import API from "../../utils/API";
import "./Treatmentplan.css";

const TreatmentPlan = () => {
    const [plan, setPlan] = useState("")

    function loadTreatmentPlan() {
        API.loadTreatment()
        .then(res => {
            setPlan(res.data);
            console.log("Plan:", res.data)
        })
        .catch(err => console.log(err));
        
    }

    useEffect(() => {
        loadTreatmentPlan();
        console.log("tx plan loaded", plan)
    }, [])

    return (
        <>
           <div className="jumbotron jumbotron-fluid">
               <div className="treatmentcontainer">
                    <h2 className="display-4 mxPlanTitle">Management plan for : {plan.name}</h2>
                    <p className="lead mxdiagnosis"><h5 className="mxdiagnosisTitle"><i class="fa fa-plus" aria-hidden="true">&nbsp;</i>Diagnosis : </h5>//diag goes here///</p>
                    <hr className="my-4"/>
                    <p className="mxtreatment"><h5 className="mxdiagnosisTitle"><i class="fa fa-user-md" aria-hidden="true">&nbsp;</i>Treatment advice: </h5>//treatment goes here//</p>
                    <p className="mxdate"><h5 className="mxdiagnosisTitle"><i class="fa fa-calendar-o" aria-hidden="true">&nbsp;</i>Recommended review date: </h5>//review date here//</p>
               </div>
            </div>
        </>
    )
}

export default TreatmentPlan;
