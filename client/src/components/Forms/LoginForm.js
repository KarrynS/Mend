import React from "react";
import "./LoginForm.css";
import LogInImage from "../../img/leaf.jpg";

function LoginForm() {
    return (
        <>
            <div className="imgDiv">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <h2>Login Form</h2>
                            <form className="login">
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="email-input" placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="password-input" placeholder="Password"/>
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