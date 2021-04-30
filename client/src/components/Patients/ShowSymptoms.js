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
                    <li>{symptomType[symptom]}</li>
                )
               
            });
    }

    const getEye = () => {
        return (    
            <><p>Affected Eye(s): {props.symptom.eye}</p></>
        )
    }

    const getPain =() => {
        if(props.symptom.pain === "") {
            return (
                <><p>Pain level: Not recorded</p></>
            )
        } else {
            return (
                <><p>Pain level: {props.symptom.pain}</p></>
            )
        }
        
    }

    return (
        <>
            <div className="patientSymptomDiv col-md-6 col-md-">
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
            </div>   
        </>
    )
}

export default ShowSymptoms
