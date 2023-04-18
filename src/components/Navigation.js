import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import logo from  "../logo.png";

function NavigationBar() {

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
                <Link to="/login">Sign in</Link>
            </nav>
        </div>
    );
}

export default NavigationBar;
