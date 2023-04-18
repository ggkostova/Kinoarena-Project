import React from "react";
import './ProgramCard.css';
import { Link } from "react-router-dom";

function ProgramCard({ movie }) {
    return (
        <div className="program-card">
            <img
                src={movie.image_src}
                alt={movie.name}
            />
            <div style={{ flex: 1, padding: "0 20px" }}>
                    <h1 className="movie-name-h1">{movie.name}</h1>
                    <ul>
                        {movie.projection_types.map((projection) => (
                            <li>{projection.type}: {projection.times.join(', ')}</li>
                        ))}
                    </ul>
            </div>
                <div>
                    <button className="program-card-btn" variant="primary">
                        <Link className="link" to="/tickets" style={{ textDecoration: "none" }}>Buy Tickets</Link>
                    </button>
                </div>

        </div>
    );
}

export default ProgramCard;