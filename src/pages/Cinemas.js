import React from "react";
import './Cinemas.css';
import CinemaCard from "../components/CinemaCard";
import localStorageManager from "../services/LocalStorageManager";
import {useState, useEffect} from "react";
import delayFunction from "../DelayFunction";

export default function CinemasPage() {
    const [cinemas, setCinemas] = useState('');

    useEffect(() => {
        delayFunction(localStorageManager.getItem, ["cinemas"])
        .then((res) => {
            setCinemas(res)
        });
    },[])

    return (
        <div className="movie-list-section">
        <div className="movie-list">
            {cinemas && cinemas.map((cinema, index) => (
                <CinemaCard key={index} cinema={cinema} />
            ))}
        </div>
    </div>
    );
}
