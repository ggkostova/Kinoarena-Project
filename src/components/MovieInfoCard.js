import React from "react";
import "./MovieInfoCard.css";

function MovieInfoCard({ movie }) {
  if (!movie) return null;

  return (
    <div className="movie-card">
      <h3>{movie.movieName}</h3>
      <p><strong>Cinema:</strong> {movie.cinema}</p>
      <p><strong>Time:</strong> {movie.time}</p>
      <p><strong>Projection Type:</strong> {movie.projectionType}</p>
    </div>
  );
}

export default MovieInfoCard;

