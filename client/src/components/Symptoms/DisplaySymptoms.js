import "./style.css";
import React from 'react';
import Moment from  'react-moment';
import API from "../../utils/API";


const DisplaySymptoms = (props) => {
    console.log("SavedSymptom props", props);
    console.log("symptoms", props.symptoms);
     
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
        }
        );
        return trueSymptoms.map((symptom) => {
            return (
                <>
                <li>{symptomType[symptom]}</li>
                </>
            )
        });
        
    }
    const  getDate = () => {
            const dateToFormat = props.symptom.date;
                console.log(props.symptom.date)
            return (
                <Moment format="dddd Do MMMM YYYY">{dateToFormat}</Moment>
            )
    }  

    const getEye = () => {
        return (    
            <><p>Affected Eye(s): {props.symptom.eye}</p></>
        )
    }

    const getPain =() => {
        if(props.symptom.pain === "") {
            return (
                <><p>Pain level: Pain level not logged</p></>
            )
        } else {
            return (
                <><p>Pain level: {props.symptom.pain}</p></>
            )
        }
        
    }

    function removeSymptom(id) {
        console.log("delete id", props.symptom._id)
        API.deleteSymptom(id)
        .then(res => getTrueSymptoms())
        window.location.reload()
        .catch( err => console.log(err));
    }



    function updateIssue() {
      /////write logic here
       
    }
 

    return (
        <>
          
          
                <div className=" cardDiv col-md-8 col-md-">
                <div className="symptomDiv">
                    <h5>Symptoms</h5>
                    {getEye()}
                    {getPain()}
                    <div className="row">
                        <ul className="col-10">
                            {/* List Symptoms here */}
                            {getTrueSymptoms()}
                        </ul>
                    </div>
                    <p> Recorded on: {getDate()}</p>
                    <button onClick={() => removeSymptom(props.symptom._id)} className="deletebtn">Delete<i className="fa fa-close"></i></button>                        
                    {/* <button onClick={updateIssue()} class="buttonload"><i class="fa fa-refresh"></i>Update</button> */}
                </div>
            </div>

        </>
    )
}

export default DisplaySymptoms;
