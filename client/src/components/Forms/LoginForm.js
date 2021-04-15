import React, { useState } from "react";
import "./LoginForm.css";
import LogInImage from "../../img/leaf.jpg";
import API from "../../utils/API";

function LoginForm() {
       //establishing form values
       const [formObject, setformObject] = useState({
        email: "",
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
        if (formObject.email && formObject.password) {
            API.loginUser({
                email: formObject.email,
                password: formObject.password
            })
            .then(() => setformObject({
                email: "",
                password: ""
            }))
            .then(() => {
                console.log("loginData", formObject);
                window.location.href = "/dashboard";
            })
            .catch(err => console.log(err));
        }
    }

    return (
        <>
            <div className="imgDiv">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <h2>Login Form</h2>
                            <form className="login" onSubmit={handleFormSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input 
                                        onChange={handleInputChange}
                                        type="email" 
                                        name="email" 
                                        className="form-control" 
                                        id="email-input" 
                                        placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input 
                                        onChange={handleInputChange}
                                        type="password" 
                                        name="password" 
                                        className="form-control" 
                                        id="password-input" 
                                        placeholder="Password"/>
                                </div>
                                <button type="submit" className="btn btn-default">Login</button>
                            </form>
                            <h3>Not a member? <a href="/">Sign up here</a></h3>
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
export default LoginForm;