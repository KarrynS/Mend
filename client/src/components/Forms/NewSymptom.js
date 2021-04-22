import React, { useState, useEffect } from "react";
import "./NewSymptom.css";
import API from "../../utils/API";
import SavedSymptoms from "../Symptoms/index";

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

    const symptomsArray = () => {
            const symptomsIssueCard = symptoms.map(symptom => {
                console.log("symptomsIssueCard", symptom);
                console.log("keys", Object.keys(symptom));
                const keys = Object.keys((symptom))

        //         trueSymptoms = keys.filter((key) => {
        //             return symptom[key] === true;
               })
            
        //     const symptomCard = symptom;
        //     for (const [key, value] of Object.entries(symptomCard)){
        //         console.log(`${key}: ${value}`);
        //         const symptomKey = `${key}`;
        //         const symptomValue = `${value}`
        //         console.log("symptomKey symptomValue", symptomKey, symptomValue)


        //     }


        // })
        
    }
    symptomsArray();

    return (
        <>
            <div className="container">
                 <div className="row">
                    <div className="col-md-6 col-md-6">
                        <form className="symptom" onSubmit={handleFormSubmit}>
                        <h2 className="cardTitle">Got an eye issue?</h2>
                        <br/>
                        <p>Check all symptoms that apply</p>
                        <div className="row">
                            <div className="row">
                        <div className="col col-lg-4">
                            <div className="form-check">
                                <input  onChange={handleInputChange} name="eye" className="form-check-input" type="checkbox" value="Right" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                  Right Eye
                                </label>
                            </div>            
                        </div>
                        <div className="col col-lg-4">
                            <div className="form-check">
                            <input  name="eye" onChange={handleInputChange} className="form-check-input" type="checkbox" value="Left" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                  Left Eye
                                </label>
                            </div>            
                        </div>
                        <div className="col col-lg-4">
                            <div className="form-check">
                                <input  name="eye" onChange={handleInputChange} className="form-check-input" type="checkbox" value="Both" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                  Both Eyes
                                </label>
                            </div>            
                        </div>
                        <hr/>
                        </div>
                        <div className="col col-md-6">
                            <div className="form-check">
                            <input  name="soreEye" onChange={handleInputChange} className="form-check-input" type="checkbox" value="true" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                  Sore Eyes
                                </label>
                            </div>            
                        </div>
                        <div className="col col-md-6">
                            <div className="form-check">
                                <input  name="redEye" onChange={handleInputChange} className="form-check-input" type="checkbox" value="true" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                 Red Eyes
                                </label>
                            </div>            
                        </div>
                        <div className="col col-md-6">
                            <div className="form-check">
                                <input  name="dryEye" onChange={handleInputChange} className="form-check-input" type="checkbox" value="true" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                  Dry Eyes
                                </label>
                            </div>            
                        </div>
                        <div className="col col-md-6">
                            <div className="form-check">
                                <input  name="itchyEye" onChange={handleInputChange} className="form-check-input" type="checkbox" value="true" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                 Itchy Eyes
                                </label>
                            </div>            
                        </div>
                        <div className="col col-md-6">
                            <div className="form-check">
                                <input  name="blurryVision" onChange={handleInputChange} className="form-check-input" type="checkbox" value="true" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                  Blurry Vision
                                </label>
                            </div>            
                        </div>
                        <div className="col col-md-6">
                            <div className="form-check">
                                <input  name="doubleVision" onChange={handleInputChange} className="form-check-input" type="checkbox" value="true" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                 Double Vision
                                </label>
                            </div>            
                        </div>
                        <div className="col col-md-6">
                            <div className="form-check">
                                <input  name="headaches" onChange={handleInputChange} className="form-check-input" type="checkbox" value="true" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                  Headaches
                                </label>
                            </div>            
                        </div>
                        <div className="col col-md-6">
                            <div className="form-check">
                                <input  name="floaters" onChange={handleInputChange} className="form-check-input" type="checkbox" value="true" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                 Floaters
                                </label>
                            </div>            
                        </div>
                        <div className="col col-md-6">
                            <div className="form-check">
                                <input  name="flashes" onChange={handleInputChange} className="form-check-input" type="checkbox" value="true" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                Flashes of light
                                </label>
                            </div>            
                        </div>
                            <br/>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="customRange2" className="form-label">Pain Level : select nearest pain level</label>
                                    <div className="d-flex justify-content-center my-4">
                                    <select className="form-select"  onChange={handleInputChange} name="pain"  multiple aria-label="multiple select example">
                                        <option value="No pain">No pain</option>
                                        <option value="Mild pain">Mild pain</option>
                                        <option value="Moderate pain">Moderate pain</option>
                                        <option value="Severe pain">Severe pain</option>
                                        <option value="Worst possible pain">Worst possible pain</option>
                                    </select>
                                </div>
                                </div>
                                
                            </div>
                        </div>
                        <br/>
                        <button  type="submit" className="btn btn-default symptomBtn">Add symptoms</button>
                        </form>
                    </div>
                </div>
            </div>

            {symptoms.map(symptom => {
                return (
                    <SavedSymptoms 
                    symptom={symptom}
                    />
                )
            })}
        </>
    )
}

export default NewSymptom;