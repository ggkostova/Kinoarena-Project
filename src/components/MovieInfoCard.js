import React from "react";
import "./MovieInfoCard.css";

function MovieInfoCard({ movie }) {
  if (!movie) return null;

  const ticketInfo = JSON.parse(movie);

  return (
    <div className="movie-card">
      <h3>{ticketInfo.movieName}</h3>
      <p>Cinema: {ticketInfo.cinema}</p>
      <p>Time: {ticketInfo.time}</p>
      <p>Projection Type: {ticketInfo.projectionType}</p>
    </div>
  );
}

export default MovieInfoCard;

