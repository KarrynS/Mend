import React, { useRef } from "react";
import "./SignUpForm.css";
import SignUpImage from "../../img/glassesonbook.jpg";
import API from "../../utils/API";


function SignUpForm() {

    const nameInput = useRef();
    const emailInput = useRef();
    const passwordInput = useRef();
    const birthdayInput = useRef();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const userData = {
            name: nameInput.current.value,
            email: emailInput.current.value,
            password: passwordInput.current.value,
            birthday: birthdayInput.current.value,
        }
        API.saveUser(userData)
        .then(res =>  {
            console.log("userData on signup", userData);
            window.location.href = "/dashboard";
        })
        .catch(err => console.log(err));
    };

    return (
        <>
        <div className="imgDiv">
            <div className="container">
                 <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h2>Sign Up Form</h2>
                        <form className="signup" onSubmit={handleOnSubmit}>
                            <div className="form-group name">
                                <label for="exampleInputEmail1">Name</label>
                                <input ref={nameInput} type="text" className="form-control" id="name-input" placeholder="Name" />
                            </div>
                            <div className="form-group email">
                                <label for="exampleInputEmail1">Email</label>
                                <input ref={emailInput}type="email" className="form-control" id="email-input" placeholder="user@mail.com.au"/>
                            </div>
                            <div className="form-group password">
                                <label for="exampleInputPassword1">Password</label>
                                <input ref={passwordInput}type="password" className="form-control" id="password-input" placeholder="Password (must be longer than 6 characters)"/>
                            </div>
                            <div>
                                <label for="birthday">Birthday: </label>
                                <input ref={birthdayInput} type="date" id="birthday-input" name="birthday"/>
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