import React from 'react';
import "./MovieCard.css";
import { Link } from 'react-router-dom';

const Card = ({ movie }) => {

  return (
    <div className="movie-card-container">
      <img src={movie.image_src} alt={movie.name} id="movieCard" className='movie-card-img' />
      <h3>{movie.name}</h3>
      <p>Genre: {movie.genre}</p>
      <p>Premiere: {movie.premiere}</p>
      <p>Projection Type: {movie.projection_type}</p>
      <button className='movie-card-btn' variant="primary"><Link className={'link'} style={{ textDecoration: "none" }} to={'/details/' + movie.id}>Details</Link></button>
    </div>
  );
};

export default Card;
