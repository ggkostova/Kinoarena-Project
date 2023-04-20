import React from "react";
import './ProgramCard.css';
import { Link } from "react-router-dom";
import localStorageManager from "../services/LocalStorageManager";

function ProgramCard({ movie }) {

    const ticketsClick = (movieName, cinema, projectionType, time) => {
        localStorageManager.setItem("tickets", JSON.stringify({
            movieName,
            cinema,
            projectionType,
            time
        }));
    };

    return (
        <div className="program-card">
            <img
                src={movie.image_src}
                alt={movie.name}
            />
            <span className="program-card-header" style={{width: "30%", padding: "0 20px" }}>
                <h1 className="movie-program-h1">{movie.name}</h1>
            </span>
            <div>
                <table className="program-projections-table">
                    <thead>
                        {/* ... Table header remains the same */}
                    </thead>
                    <tbody>
                        {movie.cinemas && movie.cinemas.map((cinema, index) => (
                            <tr className="program-tr" key={index}>
                                <td className="program-cinema-name">{cinema.name}</td>
                                <td>
                                    {cinema.projection_types.map((projection, projIndex) => (
                                        <span className="projection-type-times" key={projIndex}>
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
                                                        className="projection-btn-program"
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
                {/* <button className="program-card-btn" variant="primary">
                        <Link className="link" to="/tickets" style={{ textDecoration: "none" }}>Buy Tickets</Link>
                    </button> */}
            </div>

        </div>
    );
}

export default ProgramCard;