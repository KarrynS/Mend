import React, { useState,  useEffect } from 'react'
import API from "../../utils/API";

const TreatmentPlan = () => {
    const [treatment, setTreatment] = useState("")

    function loadTreatmentPlan() {
        API.loadTreatment()
        .then(res => {
            setTreatment(res.data);
            console.log("tx plan loaded", treatment)
        })
        .catch(err => console.log(err));
        
    }

    useEffect(() => {
        loadTreatmentPlan();
        
    }, [])

    return (
        <>
            <div className="treatmentPlanDiv">

            </div>
        </>
    )
}

export default TreatmentPlan;
