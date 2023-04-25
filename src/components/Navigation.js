import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import logo from  "../images/logo.png";

function NavigationBar() {

    return (
        <div className="nav-div">
            <nav className="nav-bar">
                <ul className="left-side">
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
                <span className="right-side not-logged">
                    <Link className="nav-link" to="/login">Sign in</Link>
                </span>
            </nav>
        </div>
    );
}

export default NavigationBar;