import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";

function Topbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                <div className="top-bar">
                    <div className="top-bar-left">
                    <a className="navbar-brand" href="/">Mend</a>
                </div>
                </div>
                
                <div className="top-bar-right">
                    <ul className="medium-horizontal align-right text-black" id="nav-menu">
                    <li className ="nav-item">
                        <Link to="/login" className={window.location.pathname === "/login" 
                                    ? "nav-link active" 
                                    : "nav-link"
                                    }
                                >Members</Link>
                    </li>
                    <li className ="nav-item">
                        <Link to="/practitioner" className={window.location.pathname === "/practitioner" 
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