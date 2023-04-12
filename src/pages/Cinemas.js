import React from "react";
import './Cinemas.css';
import CINEMAS from "../cinemas";
import CinemaCard from "../components/CinemaCard";

export default function CinemasPage() {

    return (
        <div className="movie-list-section">
        <div className="movie-list">
            {CINEMAS.map((cinema, index) => (
                <CinemaCard key={index} cinema={cinema} />
            ))}
        </div>
    </div>
    );
}
