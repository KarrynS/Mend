import React from 'react' 
import Moment from "react-moment";
import "./style.css"

const ShowSymptoms = (props) => {
    console.log("props on ShowSymptoms", props)

    const symptomType = {
        eye: "Affected eye",
        soreEye: "Sore eye",
        redEye: "Red eye",
        dryEye: "Dry eye",
        itchyEye: "Itchy eye", 
        blurryVision: "Blurry vision",
        lossofVision: "Loss of vision", 
        doubleVision: "Double vision",
        headaches: "Headaches", 
        floaters: "Floaters", 
        flashes: "Flashes of light",
        pain: "pain"
    }

    const getTrueSymptoms = () => {
            const keys = Object.keys(props.symptom || {});
            console.log("props.symptoms in getTrueSymptoms", Object.keys(props.symptom))
            const trueSymptoms = keys.filter((key) => {
                return props.symptom[key] === true
            });
            return trueSymptoms.map((symptom) => {
                return (
                    <>{symptomType[symptom]},&nbsp; </>
                )
               
            });
    }

    const getEye = () => {
        return (    
            <>{props.symptom.eye}</>
        )
    }

    const getPain =() => {
        if(props.symptom.pain === "") {
            return (
                <>Not recorded</>
            )
        } else {
            return (
                <>{props.symptom.pain}</>
            )
        }
        
    }

    return (
        <>
            <div className="container-sm sympCardContainer">
            <div className="card w-75 innersympCard">
                <div className="card-body">
                    <h3 className="card-title cardTitle">New Symptom Card</h3>
                    <p className="card-text affectedEye"><h5 className="sympCardTitle"><i class="fa fa-low-vision" aria-hidden="true">&nbsp;</i>Affected eye(s):</h5>{getEye()}</p>
                    <p className="card-text painLevel"><h5 className="sympCardTitle"><i class="fa fa-medkit" aria-hidden="true">&nbsp;</i>Pain Level:</h5>{getPain()}</p>
                    <p className="card-text recordedSymp"><h5 className="sympCardTitle"><i class="fa fa-bookmark" aria-hidden="true">&nbsp;</i>Saved Symptoms: &nbsp;</h5>{getTrueSymptoms()}</p>
                    <p className="card-text recordedDate"><h5 className="sympCardTitle"><i class="fa fa-calendar" aria-hidden="true">&nbsp;</i>Recorded on: &nbsp; <Moment format="dddd Do MMMM YYYY">{props.symptom.date}</Moment></h5></p>
                </div>
            </div>
          </div>



            {/* <div className="patientSymptomDiv col-md-6 col-md-">
                <div className="row">
                    <div className=" cardDiv col-8">
                        <p> Date : 
                            <Moment format="dddd Do MMMM YYYY">{props.symptom.date}</Moment>
                        </p>
                        {getEye()}
                        {getPain()}
                        <ul>
                            {getTrueSymptoms()}
                        </ul>
                    </div>
                </div>
            </div>    */}
        </>
    )
}

export default ShowSymptoms
