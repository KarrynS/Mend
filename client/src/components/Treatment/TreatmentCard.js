import React from 'react'
import "./Treatmentplan.css";

const TreatmentCard = ({managementPlan}) => {
    console.log("{management}", managementPlan)


    return (
        <>
         <div className="jumbotron jumbotron-fluid">
                   <div className="treatmentcontainer">
                        <h2 className="display-4 mxPlanTitle">Management plan for :</h2>
                        <p className="lead mxdiagnosis"><h5 className="mxdiagnosisTitle"><i class="fa fa-plus" aria-hidden="true">&nbsp;</i>Diagnosis : </h5></p>
                        <hr className="my-4"/>
                        <p className="mxtreatment"><h5 className="mxdiagnosisTitle"><i class="fa fa-user-md" aria-hidden="true">&nbsp;</i>Treatment advice: </h5>//treatment goes here//</p>
                        <p className="mxdate"><h5 className="mxdiagnosisTitle"><i class="fa fa-calendar-o" aria-hidden="true">&nbsp;</i>Recommended review date: </h5>//review date here//</p>
                   </div>
                </div>   
        </>
    )
}

export default TreatmentCard;
