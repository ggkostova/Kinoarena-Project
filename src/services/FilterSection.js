import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Calendar } from "primereact/calendar";
import { Link, useNavigate } from "react-router-dom";
import MOVIES from "../movies";
import "./FilterSection.css";

function FilterSection({ filter, setFilter, onSubmit }) {

    const [projectionTypes, setProjectionTypes] = useState([]);
    const [projectionTimes, setProjectionTimes] = useState([]);

    useEffect(() => {
        const selectedMovie = MOVIES.find((movie) => movie.name === filter.movieName);
        if (selectedMovie) {
            setProjectionTypes(selectedMovie.projection_types);
        } else {
            setProjectionTypes([]);
        }
    }, [filter.movieName]);

    useEffect(() => {
        const selectedProjectionType = projectionTypes.find(
            (pt) => pt.type === filter.projectionType
        );
        if (selectedProjectionType) {
            setProjectionTimes(selectedProjectionType.times);
        } else {
            setProjectionTimes([]);
        }
    }, [filter.projectionType, projectionTypes]);


    const handleFilterChange = (event) => {
        const { name, value } = event.target;

        if (name === "date") {
            const dateValue = value instanceof Date ? value.toISOString().split("T")[0] : "";
            setFilter((prevFilter) => ({ ...prevFilter, [name]: dateValue }));
        } else {
            setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit && onSubmit(event);
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
                    <option value="Kino Arena GrandMall Varna">
                        КИНО АРЕНА GRAND MALL ВАРНА
                    </option>
                    <option value="Kino Arena Bulgaria Mall Sofia">
                        КИНО АРЕНА ДЕЛУКС BULGARIA MALL
                    </option>
                    <option value="Kino Arena Mall Varna">КИНО АРЕНА МОЛ ВАРНА</option>
                    <option value="Kino Arena Plovdiv">
                        КИНО АРЕНА МОЛ МАРКОВО ТЕПЕ ПЛОВДИВ
                    </option>
                    <option value="Kino Arena TheMall Sofia">
                        КИНО АРЕНА THE MALL
                    </option>
                </select>
                <select
                    id="movieName"
                    name="movieName"
                    value={filter.movieName}
                    onChange={handleFilterChange}
                    required
                    style={{ height: '30px' }}
                >
                    <option value="">Choose movie...</option>
                    {Object.entries(MOVIES).map(([_, movie]) => (
                        <option key={movie.name} value={movie.name}>
                            {movie.name}
                        </option>
                    ))}
                </select>
                <select
                    id="projectionType"
                    name="projectionType"
                    value={filter.projectionType}
                    onChange={handleFilterChange}
                    required
                    style={{ height: "30px" }}
                >
                    <option value="">Choose projection type...</option>
                    {projectionTypes.map((pt) => (
                        <option key={pt.type} value={pt.type}>
                            {pt.type}
                        </option>
                    ))}
                </select>
                <select
                    id="projectionTimes"
                    name="projectionTimes"
                    value={filter.projectionTimes}
                    onChange={handleFilterChange}
                    required
                    style={{ height: "30px" }}
                >
                    <option value="">Choose projection time...</option>
                    {projectionTimes.map((time) => (
                        <option key={time} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
                <Calendar
                    id="date"
                    name="date"
                    className="calendar"
                    value={new Date(filter.date)}
                    onChange={handleFilterChange}
                    placeholder="Choose date..."
                    dateFormat="yy-mm-dd"
                    required
                />
                <button variant="primary" onClick={handleSubmit}
                    disabled={!filter.cinema || !filter.movieName || !filter.date}>
                    <Link className={"link"} style={{ textDecoration: "none" }}>
                        Choose Seats
                    </Link>
                </button>
            </div>
        </form>
    );
}

export default FilterSection;