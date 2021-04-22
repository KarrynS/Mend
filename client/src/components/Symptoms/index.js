import "./style.css";
import React from 'react'
import ListItem from "./listItem"

const SavedSymptoms = (props) => {
const symptomType = {
    eye: "Affected eye",
    soreEye: "Sore eye",
    redEye: "Red eye",
    dryEye: "Dry eye",
    itchyEye: "Ithcy eye", 
    blurryVision: "Blurry vision",
    lossofVision: "Loss of vision", 
    doubleVision: "Double vision",
    headaches: "headaches", 
    floaters: "floaters", 
    flashes: "flashes of light",
    pain: "pain"
}

    const getTrueSymptoms = () => {
        const keys = Object.keys(props.symptom)
        console.log("keys", keys);

        const trueSymptoms = keys.filter((key) => {
            return props.symptom[key] === true
        });

        return trueSymptoms.map((symptom) => {
            return (
                <>
                    <p>Date: {symptom.date}</p>
                    <li>{symptomType[symptom]}</li>
                </>
            )
        })
    }

    return (
        <>
            <div className="symptomContainer">
                <div className="row">
                    <div className=" cardDiv col-md-6 col-md-6">
                        <h3> Saved Symptoms</h3>
                        
                        <ul>
                            {getTrueSymptoms()}
                            {/* list symptoms here */}
                            <ListItem/>
                        </ul>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default SavedSymptoms;
