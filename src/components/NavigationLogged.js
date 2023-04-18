import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import logo from  "../logo.png";

function NavigationLoggedBar() {

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/cinemas">Cinemas</Link>
                    </li>
                    <li>
                        <Link to="/program">Program</Link>
                    </li>
                </ul>
                <Link to="/">
                    <img src={logo} alt="Logo" style={{ width: "90x", height: "60px"}}/>
                </Link>
                <Link to="/profile">Profile</Link>
            </nav>
        </div>
    );
}

export default NavigationLoggedBar;
