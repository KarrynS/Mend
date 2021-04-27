
import React, { useState, useEffect } from "react";
import "./Diagnosis.css";


function DiagnosisForm() {
    console.log(process.env.REACT_APP_APP_ID)


    const [formObject, setFormObject] = useState({
        diagnosis: ""
    })

    const [diagnosis, setDiagnosis] = useState({});

    function handleInputChange(e){
        setFormObject(e.target.value)
    }

    useEffect(() => {
        loadDiagnosis()
    }, [formObject])
     
    function loadDiagnosis(){
        fetch(`https://api.infermedica.com/v2/conditions/${formObject}?age.value=50&age.unit=year`, 
            {
                "method": "GET",
                "headers": {
                    "App-Id": `${process.env.REACT_APP_APP_ID}`,
                    "App-Key": `${process.env.REACT_APP_APP_KEY}`,
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            })
        .then((res) => res.json())
        .then((data) => {
            console.log("data:", data)
            setDiagnosis(data);
        })
    }

    console.log('diagnosis', formObject);

    function DiagnosisTable() {
        console.log("extras", diagnosis)
        return (
            <>
        

            <div className="diagnosisDiv">
                <table className="table table-borderless">
                <thead>
                    <tr>
                    <th scope="col diagnosisName">Name</th>
                    <th scope="col">Prevalence</th>
                    <th scope="col">Severity</th>
                    <th scope="col">Comments</th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">{diagnosis.common_name}</th>
                    <td>{diagnosis.prevalence}</td>
                    <td>{diagnosis.severity}</td>
                    <td>{diagnosis.extras?.hint}</td>
                    </tr>
                </tbody>
                </table>
            </div>   
        </>
        )
    }

    return (
        <>

        <div className="backgroundImg">
            <div className="container">
            <form className="form-inline" onSubmit={loadDiagnosis}>
            <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Diagnosis</label>
            <select onChange={handleInputChange}className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                <option defaultValue>Select a diagnosis...</option>
                <option  name ="diagnosis" value="c_996">Acute angle-closure glaucoma</option>
                <option  name="diagnosis" value="c_3">Allergic conjunctivitis</option>
                <option  name="diagnosis" value="c_769">Blepharitis</option>
                <option  name="diagnosis" value="c_176">Cataract</option>
                <option  name ="diagnosis" value="c_171">Chalazion</option>
                <option  name="diagnosis" value="c_172">Conjunctivitis</option>
                <option  name ="diagnosis" value="c_174">Corneal abrasion</option>
                <option  name ="diagnosis" value="c_175">Corneal ulceration</option>
                <option  name ="diagnosis" value="c_771">Diabetic Retinopathy</option>
                <option  name ="diagnosis" value="c_998">Dry Eye Disease</option>
                <option  name ="diagnosis" value="c_959">Eye Injury</option>
                <option  name ="diagnosis" value="c_892">Keratitis</option>
                <option  name ="diagnosis" value="c_c_1122">Molluscum contagiosum</option>
                <option  name ="diagnosis" value="c_799">Nasolacrimal duct obstruction</option>
                <option  name ="diagnosis" value="c_c_549">Oculomotor nerve palsy</option>
                <option  name ="diagnosis" value="c_997">Open-angle glaucoma</option>
                <option  name ="diagnosis" value="c_957">Periorbital cellulitis</option>
                <option  name ="diagnosis" value="c_596">Retinal detachment</option>
                <option  name ="diagnosis" value="c_593">Retinopathy</option>
                <option  name ="diagnosis" value="c_144">Sjögren's syndrome</option>
                <option  name ="diagnosis" value="c_170">Stye</option>
                <option  name ="diagnosis" value="c_216">Uveitis</option>
            </select>
        </form>  
            </div>
        </div>
          
            { diagnosis && DiagnosisTable() }

        </>
    )
}

export default DiagnosisForm;
