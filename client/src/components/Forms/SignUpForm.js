import React, { useState } from "react";
import "./SignUpForm.css";
import SignUpImage from "../../img/glassesonbook.jpg";
import API from "../../utils/API";


function SignUpForm() {
    //establishing form values
    const [formObject, setformObject] = useState({
        name: "",
        email: "",
        password: "",
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
        if (formObject.email && formObject.password && formObject.name && formObject.birthday) {
            API.create({
                name: formObject.name,
                username: formObject.name,
                email: formObject.email,
                password: formObject.password,
                birthday: formObject.birthday
            })
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

    // const handleOnSubmit = (e) => {
    //     e.preventDefault();
    //     const userData = {
    //         name: nameInput.current.value,
    //         email: emailInput.current.value,
    //         password: passwordInput.current.value,
    //         birthday: birthdayInput.current.value,
    //     }
    //     API.saveUser(userData)
    //     .then(res =>  {
    //         console.log("userData on signup", userData);
            
    //         window.location.href = "/dashboard";
    //     })
    //     .catch(err => console.log(err));
    // };

    return (
        <>
        <div className="imgDiv">
            <div className="container">
                 <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h2>Sign Up Form</h2>
                        <form className="signup" onSubmit={handleFormSubmit}>
                            <div className="form-group name">
                                <label htmlFor="exampleInputEmail1">Name</label>
                                <input 
                                    onChange={handleInputChange} 
                                    name="name"
                                    type="text" 
                                    className="form-control" 
                                    id="name-input" 
                                    placeholder="Name" />
                            </div>
                            <div className="form-group username">
                                <label htmlFor="exampleInputEmail1">Usermame</label>
                                <input 
                                    onChange={handleInputChange} 
                                    name="username"
                                    type="text" 
                                    className="form-control" 
                                    id="name-input" 
                                    placeholder="Username" />
                            </div>
                            <div className="form-group email">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input 
                                    onChange={handleInputChange}
                                    name="email" 
                                    type="email" 
                                    className="form-control" 
                                    id="email-input" 
                                    placeholder="user@mail.com.au"/>
                            </div>
                            <div className="form-group password">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input 
                                    onChange={handleInputChange}
                                    name="password" 
                                    type="password" 
                                    className="form-control" 
                                    id="password-input" 
                                    placeholder="Password (must be longer than 6 characters)"/>
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
                            <button type="submit" className="btn btn-default">Sign Up</button>
                        </form>
                    </div>
                    <div className="memberslinkDiv col-md-3 col-md-offset-3">
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