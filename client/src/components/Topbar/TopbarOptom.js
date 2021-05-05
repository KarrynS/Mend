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
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                <div className="top-bar">
                    <div className="top-bar-left">
                    <a className="navbar-brand"><i class="fas fa-star-of-life"></i>Mend</a>
                </div>
                </div>
                
                <div className="top-bar-right">
                    <ul className="medium-horizontal align-right text-black" id="nav-menu">
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