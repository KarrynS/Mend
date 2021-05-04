// import React, { useState,  useEffect } from 'react'
// import API from "../../utils/API";
// import "./Treatmentplan.css";


// const TreatmentCard = () => {
//     const [managementPlans, setManagementPlans] = useState([]);

//     useEffect(() => {
//         loadSavedPlan();
//     }, [])

//     const loadSavedPlan = () => {
//         API.loadManagementPlan()
//         .then(res => {
//             setManagementPlans(res.data)
//         })
//         .catch(err => console.log(err));
//     }
        
//     console.log("SetManagementPlan", managementPlans)



//     // function removeSavedPlan(id) {

//     //     API.deleteSavedPlan(id)
//     //     .then(res => loadSavedPlan())
//     //     .catch(err => console.log(err));
//     // }


//     return (
//         <>
//             <div className="jumbotron jumbotron-fluid">
//                 <div className="treatmentcontainer">
//                     <h2 className="display-4 mxPlanTitle">Treatment Plan</h2>
//                     <p className="lead mxdiagnosis"><h5 className="mxdiagnosisTitle"><i class="fa fa-plus" aria-hidden="true">&nbsp;</i>Diagnosis : </h5> //diagnosis </p>
//                     <hr className="my-4"/>
//                     <p className="mxtreatment"><h5 className="mxdiagnosisTitle"><i class="fa fa-user-md" aria-hidden="true">&nbsp;</i>Treatment advice: </h5>treatment</p>
//                     <p className="mxdate"><h5 className="mxdiagnosisTitle"><i class="fa fa-calendar-o" aria-hidden="true">&nbsp;</i>Recommended review date: </h5>//review</p>
//                     <div className="MxDeleteBtnDiv">
//                         <button  className="btn btn-primary MxDeleteBtn" value="">Delete Plan</button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// //onSubmit={removeSavedPlan(managementPlan._id)}

// export default TreatmentCard;
