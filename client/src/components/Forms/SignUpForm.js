import React, { useState } from "react";
import "./SignUpForm.css";
import SignUpImage from "../../img/glassesonbook.jpg";
import API from "../../utils/API";


function SignUpForm() {
    //establishing form values
    const [formObject, setformObject] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        password2: "",
        birthday: ""
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
        if (formObject.email && formObject.password && formObject.name) {
            API.create(
                {
                name: formObject.name,
                username: formObject.username,
                email: formObject.email,
                password: formObject.password,
                password2: formObject.password2,
                birthday: formObject.birthday
            }
            )
            .then(() => setformObject({
                name: "",
                username: "",
                email: "",
                password: "",
                birthday: ""
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
            <div className="container-fluid signUpContainer">
                 <div className="row">
                    <div className="col-md-6 col-sm-2">
                        <h2 id="signupTitle">Sign Up Form</h2>
                        <form className="signup" onSubmit={handleFormSubmit}>
                            <div className="form-group name">
                                <label htmlFor="exampleInputEmail1">Name</label>
                                <input 
                                    onChange={handleInputChange} 
                                    name="name"
                                    type="text" 
                                    className="form-control" 
                                    id="name-input" 
                                    placeholder="Name*" />
                            </div>
                            <div className="form-group username">
                                <label htmlFor="exampleInputEmail1">Username</label>
                                <input 
                                    onChange={handleInputChange} 
                                    name="username"
                                    type="text" 
                                    className="form-control" 
                                    id="name-input" 
                                    placeholder="Username*" />
                            </div>
                            <div className="form-group email">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input 
                                    onChange={handleInputChange}
                                    name="email" 
                                    type="email" 
                                    className="form-control" 
                                    id="email-input" 
                                    placeholder="user@gmail.com.au*"/>
                            </div>
                            <div className="form-group password">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input 
                                    onChange={handleInputChange}
                                    name="password" 
                                    type="password" 
                                    className="form-control" 
                                    id="password-input" 
                                    placeholder="Password* (must be longer than 6 characters)"/>
                            </div>
                            <div className="form-group password">
                                <label htmlFor="exampleInputPassword1">Re-enter password</label>
                                <input 
                                    onChange={handleInputChange}
                                    name="password2" 
                                    type="password" 
                                    className="form-control" 
                                    id="password-input" 
                                    placeholder="Re-enter password"/>
                            </div>
                            <div>
                                <label htmlFor="birthday">Birthday: </label>
                                <input 
                                    onChange={handleInputChange} 
                                    type="text" 
                                    id="birthday-input" 
                                    name="birthday" 
                                    placeholder="dd/mm/yyyy"/>
                            </div>
                            <br/>
                            <button type="submit" className="btn btn-default signUpBtn">Sign Up</button>
                        </form>
                    </div>
                    <div className="memberslinkDiv col-md-3">
                        <div className="imageDiv">
                            <img className="SignUpImage" src={SignUpImage} alt="glasses" width="350" height="350"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </>
    )
}

export default SignUpForm;