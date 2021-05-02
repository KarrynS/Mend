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
                <> {symptomType[symptom]},&nbsp; </>
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
            <><>{props.symptom.eye}</></>
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
          <div className="container-sm sympCardContainer">
            <div className="card w-75 innersympCard">
                <div className="card-body">
                    <h3 className="card-title cardTitle">New Symptom Card</h3>
                    <p className="card-text affectedEye"><h5 className="sympCardTitle"><i class="fa fa-low-vision" aria-hidden="true">&nbsp;</i>Affected eye(s):</h5>{getEye()}</p>
                    <p className="card-text painLevel"><h5 className="sympCardTitle"><i class="fa fa-medkit" aria-hidden="true">&nbsp;</i>Pain Level:</h5>{getPain()}</p>
                    <p className="card-text recordedSymp"><h5 className="sympCardTitile"><i class="fa fa-bookmark" aria-hidden="true">&nbsp;</i>Saved Symptoms: &nbsp;</h5>{getTrueSymptoms()}</p>
                    <p className="card-text recordedDate"><h5 className="sympCardTitile"><i class="fa fa-calendar-o" aria-hidden="true">&nbsp;</i>Recorded on: &nbsp;</h5>{getDate()}</p>
                    <button onClick={() => removeSymptom(props.symptom._id)} className="btn removeSmpBtn"><i className="fa fa-close">&nbsp;</i>Remove symptom</button>                  
                </div>
            </div>
          </div>
        </>
    )
}

export default DisplaySymptoms;
