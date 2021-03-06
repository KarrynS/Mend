import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./OptometristLogin.css";
import LogInImage from "../../img/optomlogin.jpg";
import API from "../../utils/API";

function OptomLoginForm(props) {
    let history = useHistory();
       //establishing form values
       const [formObject, setformObject] = useState({
        username: "",
        password: ""
    })

    //targeting form values 
    function handleInputChange(event) {
        const { name, value } = event.target;
        setformObject({
            ...formObject,
            [name]: value
        })
    }

    //upon loging, use API to autheticate user
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (formObject.username && formObject.password && formObject) {
            API.optomLogin({
                username: formObject.username,
                password: formObject.password
            })
            .then((res) => {
                console.log("loginData", formObject);
                console.log("optomdata : ", res)
                props.setOptomLoggedIn(true)
                props.setOptom(res.data)
                history.push("/optometrist")
                // window.location.href = "/optometrist";
            })
            .then(() => setformObject({
                username: "",
                password: ""
            }))
            
            .catch((err) => {
                console.log("Authorisation Error: ", err)
                alert("Invalid login details")
            });
        }
    }

    return (
        <>
            <div className="imgDiv">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <h2>Optometrist Login Form</h2>
                            <form className="login" onSubmit={handleFormSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Username</label>
                                    <input 
                                        onChange={handleInputChange}
                                        type="text" 
                                        name="username" 
                                        className="form-control" 
                                        id="username-input" 
                                        placeholder="Enter username"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input 
                                        onChange={handleInputChange}
                                        type="password" 
                                        name="password" 
                                        className="form-control" 
                                        id="password-input" 
                                        placeholder="Enter password"/>
                                </div>
                                <button type="submit" className="btn btn-default optomloginBtn">Login</button>
                            </form>
                            <h3>Not a registered clinician? <a href="/optomsignup">Register here</a></h3>
                        </div>
                        <div className="memberslinkDiv col-md-3 col-md-offset-3">
                        <div className="imageDiv">
                            <img className="LogInImage" src={LogInImage} alt="glasses" width="350" height="350"/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OptomLoginForm;