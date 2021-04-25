import "./style.css";
import React from 'react'

const SavedSymptoms = (props) => {
    console.log("SavedSymtpom props", props);

    const symptomType = {
        eye: "Affected eye",
        soreEye: "Sore eye",
        redEye: "Red eye",
        dryEye: "Dry eye",
        itchyEye: "Itchy eye", 
        blurryVision: "Blurry vision",
        lossofVision: "Loss of vision", 
        doubleVision: "Double vision",
        headaches: "headaches", 
        floaters: "floaters", 
        flashes: "flashes of light",
        pain: "pain"
    }

    const getTrueSymptoms = () => {
        const keys = Object.keys(props.symptom || {});
        const trueSymptoms = keys.filter((key) => {
            return props.symptom[key] === true
        });

        return trueSymptoms.map((symptom) => {
            return (
                <li>{symptomType[symptom]}</li>
            )
           
        });
    }

    return (
        <>
            <div className="symptomContainer">
                <div className="row">
                    <div className=" cardDiv col-4">
                        <p> Symptoms: </p>
                        <ul>
                            {/* {affectedEye()} */}
                            {getTrueSymptoms()}
                            {/* list symptoms here */}
                          
                        </ul>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default SavedSymptoms;
