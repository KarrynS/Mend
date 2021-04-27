import React, { useState, useEffect } from "react";
import "./NewSymptom.css";
import API from "../../utils/API";
import DisplaySymptoms from "./DisplaySymptoms";
import NewSymptomForm from "../Forms/NewSymptomForm";


function NewSymptom() {

    //handling form input and form submit
    const [formObject, setFormObject] = useState({
        eye: "", 
        soreEye: false,
        redEye: false,
        dryEye: false,
        itchyEye: false,
        blurryVision: false,
        lossofVision: false,
        doubleVision: false,
        headaches: false,
        floaters: false,
        flashes: false,
        pain: ""
    })

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({
            ...formObject, 
            [name]: value
        })
    }
    
    const handleFormSubmit = (e) => {
        e.preventDefault();

        console.log("formObject = ", formObject)

        API.newSymptom({
            eye: formObject.eye,
            soreEye: formObject.soreEye,
            redEye: formObject.redEye,
            dryEye: formObject.dryEye,
            itchyEye: formObject.itchyEye,
            blurryVision: formObject.blurryVision,
            lossofVision: formObject.lossofVision,
            doubleVision: formObject.doubleVision,
            headaches: formObject.headaches,
            floaters: formObject.floaters,
            flashes: formObject.flashes,
            pain: formObject.pain
        })
        .then(() => setFormObject({
            eye: "", 
            soreEye: "",
            redEye: "",
            dryEye: "",
            itchyEye: "",
            blurryVision: "",
            lossofVision: "",
            doubleVision: "",
            headaches: "",
            floaters: "",
            flashes: "",
            pain: "" 
        }))
        .then(() => {
            console.log("newSymptoms", formObject);
            window.location.href = "/symptoms";
        })
        .catch(err => console.log(err));
        console.log("New symptoms", formObject)
    }

    //loading saved symptoms API call
    const [symptoms, setSymptoms] = useState([]);

    useEffect(() => {
        loadSavedSymptoms();
        },[])

    const loadSavedSymptoms = () => {
        API.loadSavedSymptoms()
            .then(res => {
            setSymptoms(res.data)
            console.log("response =", res.data);
            })
        .catch(err => console.log(err));
    }

    
    return (
        <>
            <div className="formDiv">
                 <div className="row justify-content-around">
                    <div className="col-md-6 col-md-6">
                        <NewSymptomForm 
                            handleFormSubmit={handleFormSubmit}
                            handleInputChange={handleInputChange}
                        />
                    </div>
                 
                {symptoms.map(symptom => {
                    return (
                        
                            <DisplaySymptoms 
                                symptom={symptom}
                                symptoms={symptoms}
                            /> 
                            )       
                })}
                </div>
            </div>

           
        </>
    )
}

export default NewSymptom;