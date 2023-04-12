import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

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
                    <img src="https://e7.pngegg.com/pngimages/674/509/png-clipart-popcorn-cinema-systems-corp-film-reel-popcorn-logo-film.png" alt="Logo" />
                </Link>
                <Link to="/signin">Sign in</Link>
            </nav>
        </div>
    );
}

export default NavigationBar;
