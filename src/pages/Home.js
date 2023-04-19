import React, { useState, useEffect } from "react";
import "./Home.css";
import MOVIES from "../movies";
import Card from "../components/MovieCard";
import { useDispatch } from "react-redux";
import { setTicketInfo } from "../store/ticketSlice";
import MovieBanner from "../components/MovieBanner";
import { Link, useNavigate } from "react-router-dom";
import FilterSection from "../services/FilterSection";
import localStorageManager from "../services/LocalStorageManager";

function HomePage() {
    function buyTicket(cinema, movieName, date, projectionType, projectionTimes, username) {
        const ticket = {
            cinema: cinema,
            movieName: movieName,
            date: date,
            projectionType: projectionType,
            projectionTimes: projectionTimes,
            username: username,
        };

        const tickets = JSON.parse(localStorage.getItem("tickets")) || [];

        tickets.push(ticket);

        localStorageManager.setItem("tickets", tickets);
    }

    const [movies, setMovies] = useState([]);
    const [filter, setFilter] = useState({
        city: "",
        movieName: "",
        date: "",
        projectionType: "",
        projectionTimes: "",
        cinema: ""
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

        if (loggedUser) {
            buyTicket(filter.cinema, filter.movieName, filter.date, filter.projectionType, filter.projectionTimes, loggedUser);

            dispatch(setTicketInfo({ ...filter, username: loggedUser }));

            navigate("/seats");
        } else {
            alert("You must be logged in to purchase a ticket.");
        }
    };

    useEffect(() => {
        if( filter.cinema === "default"){
            setMovies(MOVIES);
        }else{
            const filteredMovies = MOVIES.filter(
              (movie) =>
                (!filter.city || movie.city === filter.city) &&
                (!filter.movieName || movie.name === filter.movieName) && 
                (!filter.date || movie.date === filter.date) &&
                (!filter.projectionType || movie.projection_type === filter.projectionType) &&
                (!filter.projectionTimes || movie.projectionTimes.includes(filter.projectionTimes)) &&
                (!filter.cinema || movie.cinema === filter.cinema) 
            );
            setMovies(filteredMovies);
        }
    }, [filter]);

    return (
        <div className="movie-page">
            <div className="movie-adds-section">
                <MovieBanner />
            </div>
            <FilterSection
                filter={filter}
                setFilter={setFilter}
                onSubmit={handleSubmit}
            />
            <div className="movie-list-section">
                <div className="movie-list">
                    {movies && movies.map(movie => (
                        <Card
                            key={movie.id}
                            movie={movie}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;

