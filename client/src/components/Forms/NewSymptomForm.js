import React from "react";

const NewSymptomForm = ({handleFormSubmit, handleInputChange}) => {

    return (
        <>
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
        </>
    )
}

export default NewSymptomForm
