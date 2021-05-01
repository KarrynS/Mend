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
                    <h1 className="display-4">Management plan for : {plan.name}</h1>
                    <p className="lead"><h5>Diagnosis : </h5>diag goes here</p>
                    <hr className="my-4"/>
                    <p><h5>Treatment advice: </h5>treatment goes here</p>
                    <p><h5>Suggested review date: </h5>review date here</p>
               </div>
            </div>
        </>
    )
}

export default TreatmentPlan;
