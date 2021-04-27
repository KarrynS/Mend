
import React, { useState, useEffect } from "react";
import "./Diagnosis.css";

function DiagnosisForm() {

    const [formObject, setFormObject] = useState({
        diagnosis: ""
    })

    const [diagnosis, setDiagnosis] = useState();

    function handleInputChange(e){
        setFormObject(e.target)
        console.log('diagnosis', formObject);
    }

    useEffect(() => {
        loadDiagnosis()
    }, [formObject])
     
    function loadDiagnosis(){
        // fetch(`https://api.infermedica.com/v2/conditions/${formObject}?age.value=50&age.unit=year`, 
        //     {
        //         "method": "GET",
        //         "headers": {
        //             "App-Id": "050f1dba",
        //             "App-Key": "2965721055b4955f9a164fa79d384553",
        //             "Content-Type": "application/json",
        //             "Accept": "application/json",
        //         }
        //     })
        // .then(function(res) {
        //     console.log("API response", res)
        // })
    }

    return (
        <>

        <div className="backgroundImg">
            <div className="container">
            <form className="form-inline" onSubmit={loadDiagnosis}>
            <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Diagnosis</label>
            <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                <option defaultValue>Select a diagnosis...</option>
                <option onChange={handleInputChange} name="diagnosis" value="c_176">Cataract</option>
                <option onChange={handleInputChange} name="diagnosis" value="c_172">Conjunctivitis</option>
                <option onChange={handleInputChange} name ="diagnosis" value="c_174">Corneal abrasion</option>
            </select>
            <button type="submit" className="btn btn-primary my-1">Find out more</button>
        </form>  
            </div>
        </div>
          
        </>
    )
}

export default DiagnosisForm;
