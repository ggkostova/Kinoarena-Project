import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import logo from "../images/logo.png";
import userManager from "../services/UserManager";

function NavigationLoggedBar({ handleLogout }) {

    let handleLogoutButton = (event) => {
        event.preventDefault();
        userManager.logout();
        handleLogout();
        window.location.href = "/";
    }

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
                            <Link className="nav-link" to={'/program'}>Program</Link>
                        </span>
                    </li>
                </ul>
                <Link className="title" to="/">
                    <img src={logo} alt="Logo" style={{ width: "110x", height: "80px" }} />
                </Link>
                <div className="right-side">
                    <span>
                        <Link className="nav-link" to="/profile">Profile</Link>
                    </span>
                    <span>
                        <button className="logout-btn" onClick={handleLogoutButton}>Logout</button>
                    </span>
                </div>

            </nav>
        </div>
    );
}

export default NavigationLoggedBar;
