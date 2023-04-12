import React from 'react';
import "./MovieCard.css";
import { Link } from 'react-router-dom';

const Card = ({ movie }) => {

  const handleClick = () => {
  
    localStorage.setItem("detailsId", movie.id);
  }

  

  return (
    <div className="movie-card">
      <img src={movie.image_src} alt={movie.name} className='movie-card-img' />
      <h3>{movie.name}</h3>
      <p>Genre: {movie.genre}</p>
      <p>Premiere: {movie.premiere}</p>
      <p>Projection Type: {movie.projection_type}</p>
      <button variant="primary" onClick={handleClick}><Link className={'link'}  to={{ pathname: '/details', state: { id: movie.id } }}>Details</Link></button>
      <button variant="primary"><Link className={'link'} to={'/tickets'}>Buy Tickets</Link></button>
    </div>
  );
};

export default Card;
