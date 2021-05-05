import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import API from "../../utils/API";

function Navbar() {

    const handleLogout= () => {
        API.logout()
        .then(response => {
            window.location.href="/login"
        })
    }
    
    return(
        <>
            <nav className="navbar navbar-expand-md navbar-light">
                {/* <div className="container-fluid"> */}
                    <a className="navbar-brand" href="/dashboard"><i className="fas fa-star-of-life"></i> Mend</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="top-bar-right collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav  mr-auto mt-2 mt-lg-0 align-right text-black" id="nav-menu">
                            {/* <li className="nav-item">
                                <Link to="/dashboard" className={window.location.pathname === "/" || window.location.pathname === "/members"
                                    ? "nav-link active"
                                    : "nav-link"
                                    }
                                >Home</Link>
                            </li> */}
                            <li className="nav-item">
                            <Link to="/symptoms" className={window.location.pathname === "/symptoms" 
                                    ? "nav-link active" 
                                    : "nav-link"
                                    }
                                >Symptoms</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/management" className={window.location.pathname === "/management" 
                                    ? "nav-link active" 
                                    : "nav-link"
                                    }
                                >Management</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/diagnosis" className={window.location.pathname === "/diagnosis" 
                                    ? "nav-link active" 
                                    : "nav-link"
                                    }
                                >Diagnosis</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/chat" className={window.location.pathname === "/chat" 
                                    ? "nav-link active" 
                                    : "nav-link"
                                    }
                                >iChat</Link>
                            </li>
                            <li className="nav-item">
                            <Link onClick={handleLogout} className={window.location.pathname === "/login"
                                    ? "nav-link active" 
                                    : "nav-link"
                                    }
                                >Logout</Link>
                            </li>
                        </ul>
                    </div>
                {/* </div> */}
            </nav>
        </>
    )
}

export default Navbar;