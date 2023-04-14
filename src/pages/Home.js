import React, { useState, useEffect } from "react";
import './Home.css';
import MOVIES from '../movies';
import Card from '../components/MovieCard';
import MovieBanner from "../components/MovieBanner";
import { Link } from 'react-router-dom';
import LocalStorageManager from "../services/LocalStorageManager";

function HomePage() {
    // set initial state for movie data and filter criteria
    const [movies, setMovies] = useState([]);
    const [filter, setFilter] = useState({
        city: "",
        movieName: "",
        date: "",
    });

    LocalStorageManager.setMoviesInLocalStorage();

    // fetch movie data from local storage on component mount
    useEffect(() => {
        const storedMovies = JSON.parse(localStorage.getItem("movies"));
        if (storedMovies) {
            setMovies(storedMovies);
        }
    }, []);

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
    };

    // filter movies based on filter criteria
    // const filteredMovies = movies.filter(
    //     (movie) =>
    //         movie.title.toLowerCase().includes(filter.movieName.toLowerCase()) &&
    //         movie.city.toLowerCase().includes(filter.city.toLowerCase()) &&
    //         movie.date.toLowerCase().includes(filter.date.toLowerCase()) &&
    //         movie.time.toLowerCase().includes(filter.time.toLowerCase())
    // );

    const handleDetailsButtonClick = (id) => {
        MOVIES.filter(movie => movie.id === id);
    }

    return (
        <div className="movie-page">
            <div className="movie-adds-section">
                {/* {MOVIES.map((movie) => (
                    <MovieBanner movie={movie} key={movie.id} />
                ))}             */}
                <MovieBanner />
            </div>
            <div className="filter-section">
                <select id="cinema" name="cinema">
                    <option default value="Choose cinema:">Choose cinema:</option>
                    <option value="theMall">КИНО АРЕНА THE MALL</option>
                    <option value="grandMall">КИНО АРЕНА GRAND MALL ВАРНА</option>
                    <option value="bulgariaMall">КИНО АРЕНА ДЕЛУКС BULGARIA MALL</option>
                    <option value="molVarna">КИНО АРЕНА МОЛ ВАРНА</option>
                    <option value="plovdiv">КИНО АРЕНА МОЛ МАРКОВО ТЕПЕ ПЛОВДИВ</option>
                </select>
                <input
                    type="text"
                    name="movieName"
                    value={filter.movieName}
                    onChange={handleFilterChange}
                    required
                    placeholder="Movie Name..."
                />

                <input
                    type="text"
                    name="date"
                    value={filter.date}
                    onChange={handleFilterChange}
                    required
                    placeholder="Date..."
                />

                <button className="filter-btn" variant="primary"><Link className={'link'} style={{ textDecoration: "none" }} to={'/tickets'}>Buy Tickets</Link></button>
            </div>
            <div className="movie-list-section">
                <div className="movie-list">
                    {MOVIES.map(movie => (
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

