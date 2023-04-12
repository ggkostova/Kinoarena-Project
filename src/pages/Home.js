import React, { useState, useEffect } from "react";
import './Home.css';
import MOVIES from '../movies';
import Card from '../components/MovieCard';
import MovieBanner from "../components/MovieBanner";
import { Link } from 'react-router-dom';

function HomePage() {
    // set initial state for movie data and filter criteria
    const [movies, setMovies] = useState([]);
    const [filter, setFilter] = useState({
        city: "",
        movieName: "",
        date: "",
        time: "",
    });

    // fetch movie data from local storage on component mount
    useEffect(() => {
        const storedMovies = JSON.parse(localStorage.getItem("movies"));
        if (storedMovies) {
            setMovies(storedMovies);
        }
    }, []);

    // handle filter input changes
    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
    };

    // filter movies based on filter criteria
    const filteredMovies = movies.filter(
        (movie) =>
            movie.title.toLowerCase().includes(filter.movieName.toLowerCase()) &&
            movie.city.toLowerCase().includes(filter.city.toLowerCase()) &&
            movie.date.toLowerCase().includes(filter.date.toLowerCase()) &&
            movie.time.toLowerCase().includes(filter.time.toLowerCase())
    );

    const handleDetailsButtonClick = (id) => {
        MOVIES.filter(movie => movie.id === id);
    }

    return (
        <div className="movie-page">
            <div className="movie-adds-section">
                {/* {MOVIES.map((movie) => (
                    <MovieBanner movie={movie} key={movie.id} />
                ))}             */}
                 <MovieBanner/>
            </div>
            <div className="filter-section">
                <label>
                    City:
                    <input
                        type="text"
                        name="city"
                        value={filter.city}
                        onChange={handleFilterChange}
                    />
                </label>
                <label>
                    Movie Name:
                    <input
                        type="text"
                        name="movieName"
                        value={filter.movieName}
                        onChange={handleFilterChange}
                    />
                </label>
                <label>
                    Date:
                    <input
                        type="text"
                        name="date"
                        value={filter.date}
                        onChange={handleFilterChange}
                    />
                </label>
                <label>
                    Time:
                    <input
                        type="text"
                        name="time"
                        value={filter.time}
                        onChange={handleFilterChange}
                    />
                </label>
                <button variant="primary"><Link className={'link'} to={'/tickets'}>Buy Tickets</Link></button>
            </div>
            <div className="movie-list-section">
                <div className="movie-list">
                    {MOVIES.map(movie=> (
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

