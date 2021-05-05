import React from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import "./TopbarOptom.css";

function TopbarOptom() {

    const handleLogout = () => {
        API.optomLogout()
        .then(res => {
            window.location.href="/optomlogin"
        })
    }

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light">
                <div className="container-fluid">
                <div className="top-bar">
                    <div className="top-bar-left">
                    <a className="navbar-brand"><i class="fas fa-star-of-life"></i>Mend</a>
                    </div>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                </button>
                <div className="top-bar-right collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="medium-horizontal mr-auto mt-2 mt-lg-0 align-right text-black" id="nav-menu">
                    <li className ="nav-item">
                        <Link to="/optometrist" className={window.location.pathname === "/optometrist" 
                                    ? "nav-link active" 
                                    : "nav-link"
                                    }
                                >Home</Link>
                    </li>
                    <li className ="nav-item">
                        <Link to="/chat" className={window.location.pathname === "/chat" 
                                    ? "nav-link active" 
                                    : "nav-link"
                                    }
                                >iChat</Link>
                    </li>
                    <li className ="nav-item">
                        <Link onClick={handleLogout} className={window.location.pathname === "/optomlogin" 
                                    ? "nav-link active" 
                                    : "nav-link"
                                    }
                                >Logout</Link>
                    </li>
                
            </ul>
        </div>
    </div>
            </nav>
        </>
    )
    
}

export default TopbarOptom;