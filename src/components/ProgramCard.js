import React from "react";
import './ProgramCard.css';
import { Link, useParams } from "react-router-dom";

function ProgramCard({movie, onAddTicket}) {
    const {movieId: urlMovieId} = useParams();

    const ticketsClick = (movieName, cinema, projectionType, time) => {
        const ticket = {
            movieId: urlMovieId,
            movieName,
            cinema,
            projectionType,
            time
        }
        localStorage.setItem("tickets", JSON.stringify(ticket));
        onAddTicket(ticket);
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
                    <thead></thead>
                    <tbody>
                        {movie.cinemas && movie.cinemas.map((cinema, index) => (
                            <tr className="program-tr" key={index}>
                                <td className="program-cinema-name">{cinema.name}</td>
                                <td>
                                    {cinema.projection_types.map((projection, projIndex) => (
                                        <span className="projection-type-times" key={projIndex}>
                                            {projection.type}:
                                            {projection.times.map((time) => (
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
                                                        key={time}
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
            </div>

        </div>
    );
}

export default ProgramCard;