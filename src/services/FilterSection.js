import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Calendar } from "primereact/calendar";
import { Link, useNavigate } from "react-router-dom";
import MOVIES from "../movies";
import "./FilterSection.css";

function FilterSection({ filter, setFilter, movies, setMovies}) {
    // const [projectionTypes, setProjectionTypes] = useState([]);
    // const [projectionTimes, setProjectionTimes] = useState([]);

    // useEffect(() => {
    //     const selectedMovie = MOVIES.find((movie) => movie.name === filter.movieName);
    //     if (selectedMovie) {
    //         setProjectionTypes(selectedMovie.projection_types);
    //     } else {
    //         setProjectionTypes([]);
    //     }
    // }, [filter.movieName]);

    // useEffect(() => {
    //     const selectedProjectionType = projectionTypes.find(
    //         (pt) => pt.type === filter.projectionType
    //     );
    //     if (selectedProjectionType) {
    //         setProjectionTimes(selectedProjectionType.times);
    //     } else {
    //         setProjectionTimes([]);
    //     }
    // }, [filter.projectionType, projectionTypes]);

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
    };
   

    return (
        <form className="filter-form">
            <div className="filter-section">
                <select
                    id="cinema"
                    name="cinema"
                    value={filter.cinema}
                    onChange={handleFilterChange}
                    required
                    style={{ height: '30px' }}
                >
                    <option value="default">Choose cinema...</option>
                    <option value="КИНО АРЕНА GRAND MALL ВАРНА">
                        КИНО АРЕНА GRAND MALL ВАРНА
                    </option>
                    <option value="КИНО АРЕНА ДЕЛУКС BULGARIA MALL">
                        КИНО АРЕНА ДЕЛУКС BULGARIA MALL
                    </option>
                    <option value="КИНО АРЕНА МОЛ ВАРНА">
                        КИНО АРЕНА МОЛ ВАРНА
                    </option>
                    <option value="КИНО АРЕНА МОЛ МАРКОВО ТЕПЕ ПЛОВДИВ">
                        КИНО АРЕНА МОЛ МАРКОВО ТЕПЕ ПЛОВДИВ
                    </option>
                    <option value="КИНО АРЕНА THE MALL">
                        КИНО АРЕНА THE MALL
                    </option>
                </select>
                <select
                    id="projectionType"
                    name="projectionType"
                    value={filter.projectionType}
                    onChange={handleFilterChange}
                    required
                    style={{ height: "30px" }}
                >
                    <option value="default">Choose projection type...</option>
                    <option value="2D">2D</option>
                    <option value="3D">3D</option>
                    <option value="IMAX">IMAX</option>
                </select>
            </div>
        </form>
    );
}

export default FilterSection;