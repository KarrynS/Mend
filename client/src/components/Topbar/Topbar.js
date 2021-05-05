import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";
import API from "../../utils/API";

function Topbar() {

    const handleLogout = () => {
        API.optomLogout()
        .then(response => {
            window.location.href="/optomlogin"
        })
    }
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light">
                <div className="container-fluid">
                    <div className="top-bar">
                        <div className="top-bar-left">
                        <a className="navbar-brand" href="/"><i className="fas fa-star-of-life"></i>Mend</a>
                    </div>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                </button>
                <div className="top-bar-right collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="medium-horizontal mr-auto mt-2 mt-lg-0 align-right text-black" id="nav-menu">
                    <li className ="nav-item">
                        <Link to="/login" className={window.location.pathname === "/login" 
                                    ? "nav-link active" 
                                    : "nav-link"
                                    }
                                >Members</Link>
                    </li>
                    <li className ="nav-item">
                        <Link onClick={handleLogout} className={window.location.pathname === "/optomlogin" 
                                    ? "nav-link active" 
                                    : "nav-link"
                                    }
                                >Optometrists</Link>
                    </li>
                
            </ul>
        </div>
    </div>
            </nav>
        </>
    )
    
}

export default Topbar;