import React, {useState} from "react";
import "./NewSymptom.css";
import API from "../../utils/API";

function NewSymptom() {
    const [formObject, setFormObject] = useState({
        eye: "", 
        soreEye: "",
        redEye: "",
        dryEye: "",
        itchEye: "",
        blurryVision: "",
        lossofVision: "",
        doubleVision: "",
        headaches: "",
        floaters: "",
        flashes: "",
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
        API.newSymptom({
            eye: formObject.eye,
            soreEye: formObject.soreEye,
            redEye: formObject.redEye,
            dryEye: formObject.dryEye,
            itchEye: formObject.itchyEye,
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
            itchEye: "",
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
    }


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
                        <div className="col col-lg-4">
                            <div className="form-check">
                                <input onChange={handleInputChange} name="eye" className="form-check-input" type="checkbox" value="Right" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                  Right Eye
                                </label>
                            </div>            
                        </div>
                        <div className="col col-lg-4">
                            <div className="form-check">
                            <input onChange={handleInputChange} name="eye" className="form-check-input" type="checkbox" value="Left" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                  Left Eye
                                </label>
                            </div>            
                        </div>
                        <div className="col col-lg-4">
                            <div className="form-check">
                                <input onChange={handleInputChange} name="eye"className="form-check-input" type="checkbox" value="Both" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                  Both Eyes
                                </label>
                            </div>            
                        </div>
                        <div className="col col-md-6">
                            <div className="form-check">
                            <input onChange={handleInputChange} name="soreEye" className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                  Sore Eyes
                                </label>
                            </div>            
                        </div>
                        <div className="col col-md-6">
                            <div className="form-check">
                                <input onChange={handleInputChange} name="redEye" className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                 Red Eyes
                                </label>
                            </div>            
                        </div>
                        <div className="col col-md-6">
                            <div className="form-check">
                                <input onChange={handleInputChange} name="dryEye" className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                  Dry Eyes
                                </label>
                            </div>            
                        </div>
                        <div className="col col-md-6">
                            <div className="form-check">
                                <input onChange={handleInputChange} name="itchyEye" className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                 Itchy Eyes
                                </label>
                            </div>            
                        </div>
                        <div className="col col-md-6">
                            <div className="form-check">
                                <input onChange={handleInputChange} name="blurryVision" className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                  Blurry Vision
                                </label>
                            </div>            
                        </div>
                        <div className="col col-md-6">
                            <div className="form-check">
                                <input onChange={handleInputChange} name="doubleVision" className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                 Double Vision
                                </label>
                            </div>            
                        </div>
                        <div className="col col-md-6">
                            <div className="form-check">
                                <input onChange={handleInputChange} name="headaches" className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                  Headaches
                                </label>
                            </div>            
                        </div>
                        <div className="col col-md-6">
                            <div className="form-check">
                                <input onChange={handleInputChange} name="floaters" className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                 Floaters
                                </label>
                            </div>            
                        </div>
                        <div className="col col-md-6">
                            <div className="form-check">
                                <input onChange={handleInputChange} name="flashes" className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                Flashes of light
                                </label>
                            </div>            
                        </div>
                            <br/>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="customRange2" className="form-label">Pain Level (0: No pain 5: Worst possible pain)</label>
                                    <div className="d-flex justify-content-center my-4">
                                    <span className="font-weight-bold blue-text mr-2 mt-1">0</span>
                                    <form className="range-field w-25">
                                        <input onChange={handleInputChange} name="pain" className="border-0" type="range" min="0" max="5" />
                                    </form>
                                    <span className="font-weight-bold blue-text ml-2 mt-1">5</span>
                                </div>

                                </div>
                                
                            </div>
                        </div>
                        <br/>
                        <button type="submit" className="btn btn-default symptomBtn">Add symptoms</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewSymptom;