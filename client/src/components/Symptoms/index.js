import "./style.css";
import React from 'react';
import Moment from  'react-moment';

const SavedSymptoms = (props) => {
    console.log("SavedSymptom props", props);
    console.log("date", props.symptoms);
     
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
        console.log("Object.keys", props.symptom )
        const trueSymptoms = keys.filter((key) => {
            return props.symptom[key] === true
        });

        return trueSymptoms.map((symptom) => {
            return (
                <>
                <li>{symptomType[symptom]}</li>
                </>
            )
           
        });
    }

    const  getDate = () => {
        const dateToFormat = "2021-04-23T12:32:06.005Z";
        return (
            <Moment format="dddd Do MMMM YYYY">{dateToFormat}</Moment>
        )
    }  

    const getEye = () => {
        const keys = Object.keys(props.symptom || {});
       if (keys === "Both") {
           return (
               <><li>Eyes: Both</li></>
           ) 
       } 
       else if (keys === "Right") {
           return (
            <><li>Eye: Right</li></>
            ) 
       } else {
        return (
            <><li>Eye: Left</li></>
            ) 
       }
    }

    return (
        <>
          
               
                    <div className=" cardDiv col-md-6 col-md-">
                        <h5> Symptoms: </h5>
                        <p> {getDate()}</p>
                    
                        <div className="row">
                        <ul className="col-10">
                            {getEye()}
                            {/* List Symptoms here */}
                            {getTrueSymptoms()}
                        </ul>
                        <button type="submit" className="deletebtn"><i className="fa fa-close"></i></button>                        </div>
                        
                    </div>
            

        </>
    )
}

export default SavedSymptoms;
