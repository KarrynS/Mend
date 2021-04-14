import React from "react";
import "./NewSymptom.css";

function NewSymptom() {
    return (
        <>
            <div className="container">
                 <div className="row">
                    <div className="col-md-6 col-md-6">
                        <form className="symptom">
                        <h2 className="cardTitle">Got an eye issue?</h2>
                        <br/>
                        <p>Check all symptoms that apply</p>
                        <div className="row">
                        <div className="col col-md-6">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" for="flexCheckDefault">
                                  Sore Eyes
                                </label>
                            </div>            
                        </div>
                        <div className="col col-md-6">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" for="flexCheckDefault">
                                 Red Eyes
                                </label>
                            </div>            
                        </div>
                        <div className="col col-md-6">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" for="flexCheckDefault">
                                  Dry Eyes
                                </label>
                            </div>            
                        </div>
                        <div className="col col-md-6">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" for="flexCheckDefault">
                                 Itchy Eyes
                                </label>
                            </div>            
                        </div>
                        <div className="col col-md-6">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" for="flexCheckDefault">
                                  Blurry Vision
                                </label>
                            </div>            
                        </div>
                        <div className="col col-md-6">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" for="flexCheckDefault">
                                 Double Vision
                                </label>
                            </div>            
                        </div>
                        <div className="col col-md-6">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" for="flexCheckDefault">
                                  Headaches
                                </label>
                            </div>            
                        </div>
                        <div className="col col-md-6">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" for="flexCheckDefault">
                                 Floaters
                                </label>
                            </div>            
                        </div>
                        <div className="col col-md-6">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" for="flexCheckDefault">
                                Flashes of light
                                </label>
                            </div>            
                        </div>
                            <br/>
                            <div className="row">
                                <div className="col">
                                    <label for="customRange2" className="form-label">Pain Level (0: No pain 5: Worst possible pain)</label>
                                    <div className="d-flex justify-content-center my-4">
                                    <span className="font-weight-bold blue-text mr-2 mt-1">0</span>
                                    <form className="range-field w-25">
                                        <input className="border-0" type="range" min="0" max="5" />
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