import React, {useState} from 'react'
import API from "../../utils/API"

const UpdateSymptom = () => {
    //handling form input and form submit
    const [formObject, setFormObject] = useState({})

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

        API.updateSymptombyId({
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

    return (
        <>
            <div className="modal" tabindex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <form className="symptom" onSubmit={handleFormSubmit}>
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
                        </form> 
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Save changes</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
        </>
    )
}

export default UpdateSymptom;
