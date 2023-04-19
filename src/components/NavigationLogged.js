import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import logo from  "../logo.png";

function NavigationLoggedBar() {

    return (
        <div className="nav-div">
            <nav className="nav-bar">
                <ul>
                    <li>
                        <span>
                            <Link className="nav-link" to="/cinemas">Cinemas</Link>
                        </span>
                    </li>
                    <li>
                        <span>
                            <Link className="nav-link" to="/program">Program</Link>
                        </span>
                    </li>
                </ul>
                <Link className="title" to="/">
                    <img src={logo} alt="Logo" style={{ width: "110x", height: "80px"}}/>
                </Link>
                <span>
                    <Link className="nav-link" to="/profile">Profile</Link>
                </span>
            </nav>
        </div>
    );
}

export default NavigationLoggedBar;
