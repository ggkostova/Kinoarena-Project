import React from 'react';
import "./MovieCard.css";
import { Link } from 'react-router-dom';

const Card = ({ movie }) => {

  const handleClick = () => {
  
    localStorage.setItem("detailsId", movie.id);
  }

  const ticketsClick = () => {
    localStorage.setItem("ticketsId", movie.id);
  }

  return (
    <div className="movie-card">
      <img src={movie.image_src} alt={movie.name} className='movie-card-img' />
      <h3>{movie.name}</h3>
      <p>Genre: {movie.genre}</p>
      <p>Premiere: {movie.premiere}</p>
      <p>Projection Type: {movie.projection_type}</p>
      <button variant="primary" onClick={handleClick}><Link className={'link'} style={{ textDecoration: "none" }} to={{ pathname: '/details', state: { id: movie.id } }}>Details</Link></button>
      <button variant="primary" onClick={ticketsClick}><Link className={'link'} style={{ textDecoration: "none" }} to={{ pathname: '/tickets', state: { id: movie.id } }}>Buy Tickets</Link></button>
    </div>
  );
};

export default Card;
