import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";

function Topbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                <div class="top-bar">
                    <div class="top-bar-left">
                    <a className="navbar-brand" href="/">Mend</a>
                </div>
                </div>
                
                <div class="top-bar-right">
                    <ul class="medium-horizontal align-right text-black" id="nav-menu">
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