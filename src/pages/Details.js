import React, { useState, useEffect } from "react";
import "./Details.css";
import MOVIES from "../movies";
import { Link, useParams } from "react-router-dom";
import localStorageManager from "../services/LocalStorageManager";
// import delayFunction from "../DelayFunction";
// import { useSelector } from "react-redux";

export default function DetailsPage() {
    const {detailsId} = useParams();
    const ticketsClick = (movieName, cinema, projectionType, time) => {
        localStorageManager.setItem("tickets", JSON.stringify({
            movieName,
            cinema,
            projectionType,
            time
        }));
    };

    const [movie, setMovie] = useState('');

    useEffect(() => {
        if (detailsId) {
            console.log(detailsId);
            setMovie(MOVIES.find((m) => m.id === detailsId));
        }
    }, [detailsId])

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="detail-card">
                <div className="detail-card-left">
                    <img src={movie && movie['image_src']} alt="Movie Poster" className="movie-poster" />
                    <h2 className="movie-title">{movie && movie.name}</h2>
                </div>
                <div className="movie-card-right">
                    <div className="movie-details">
                        <p className="details-p"><strong>Duration:</strong> {movie && movie.duration}</p>
                        <p className="details-p"><strong>Summary:</strong> {movie && movie.summary}</p>
                        <p className="details-p"><strong>Director:</strong> {movie && movie.director}</p>
                        <p className="details-p"><strong>Genre:</strong> {movie && movie.genre}</p>
                        <p className="details-p"><strong>Cast:</strong> {movie && movie.cast}</p>

                    </div>
                </div>
            </div>

            <table className="cinema-projections-table">
                <thead>
                    {/* ... Table header remains the same */}
                </thead>
                <tbody>
                    {movie.cinemas && movie.cinemas.map((cinema, index) => (
                        <tr key={index}>
                            <td>{cinema.name}</td>
                            <td>
                                {cinema.projection_types.map((projection, projIndex) => (
                                    <span key={projIndex}>
                                        {projection.type}:
                                        {projection.times.map((time, timeIndex) => (
                                            <Link
                                                to={{
                                                    pathname: '/tickets',
                                                    state: {
                                                        movieName: movie.name,
                                                        cinema: cinema.name,
                                                        projectionType: projection.type,
                                                        time: time,
                                                    },
                                                }}
                                            >
                                                <button
                                                    key={timeIndex}
                                                    className="projection-time-btn" // Add a CSS class for styling
                                                    onClick={() => ticketsClick(movie.name, cinema.name, projection.type, time)}
                                                >
                                                    {time}
                                                </button>
                                            </Link>
                                        ))}
                                        {projIndex < cinema.projection_types.length - 1 && <br />}
                                    </span>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}