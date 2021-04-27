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

            // const keys = Object.keys(props.symptom || {});
            // const symptomDate = keys.filter((key) => {
            //     return props.symptom[key] === "Date"
            // })
            //     return (
            //         <Moment format="dddd Do MMMM YYYY">{symptomDate}</Moment>
            //     )
          
    //     const dates = Object.entries(props.symptom || {});
    //     console.log("object entries", dates)
        
    //     const getDateValue = dates.filter((date) => {
    //         return props.symptoms[date] === "date"
    //     })

    //     return(
    //         <Moment format="dddd Do MMMM YYYY">{getDateValue}</Moment>
    //     )
          
    //    for (const [key, value] of dates) {
    //        console.log(value, key, "Date")
    //        if (Object.keys(dates) === "Date"){
    //            console.log("value", value) 
    //        }
    //    }
        

       
        // symptomArray.forEach(function (date) {
        //     const dateToFormat = date;
        //     console.log("date to format", dateToFormat)
        // })
        // props.symptoms.map(symptom => {
        //     console.log("getDate symptom", symptom)
        //     const dateToFormat = symptom;
        //     return (
        //         <Moment format="dddd Do MMMM YYYY">{dateToFormat}</Moment>
        //     )
        // })
        
       


    // const  getDate = () => {
    //     const dateToFormat = props.date;
    //     return (
    //         <Moment format="dddd Do MMMM YYYY">{dateToFormat}</Moment>
    //     )
    // }  

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

    function removeSymptom(id) {
        console.log("delete id", props.symptom._id)
        API.deleteSymptom(id)
        .then(res => getTrueSymptoms())
        window.location.reload()
        .catch( err => console.log(err));
    }
    return (
        <>
          
          <div className="symptomDiv col-md-6">
                <div className=" cardDiv col-md-6 col-md-">
                    <h5> Symptoms: </h5>
                    <p> {getDate()}</p>
                    <div className="row">
                        <ul className="col-10">
                            {getEye()}
                            {/* List Symptoms here */}
                            {getTrueSymptoms()}
                        </ul>
                        <button onClick={() => removeSymptom(props.symptom._id)} className="deletebtn"><i className="fa fa-close"></i></button>                        
                    </div>
                </div>
            </div>

        </>
    )
}

export default DisplaySymptoms;
