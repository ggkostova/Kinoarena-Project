import React from 'react';
import "./MovieCard.css";
import { Link } from 'react-router-dom';
import localStorageManager from '../services/LocalStorageManager';
import delayFunction from '../DelayFunction';

const Card = ({ movie }) => {

  const handleClick = () => {
    delayFunction(() => localStorageManager.setItem('detailsId', movie.id), []);
  }

  const ticketsClick = () => {
    delayFunction(() => localStorageManager.setItem('ticketsId', movie.id), []);
  }

  return (
    <div className="movie-card">
      <img src={movie.image_src} alt={movie.name} className='movie-card-img' />
      <h3>{movie.name}</h3>
      <p>Genre: {movie.genre}</p>
      <p>Premiere: {movie.premiere}</p>
      <p>Projection Type: {movie.projection_type}</p>
      <button className='movie-card-btn' variant="primary" onClick={handleClick}><Link className={'link'} style={{ textDecoration: "none" }} to={{ pathname: '/details', state: { id: movie.id } }}>Details</Link></button>
      <button className='movie-card-btn' variant="primary" onClick={ticketsClick}><Link className={'link'} style={{ textDecoration: "none" }} to={{ pathname: '/tickets', state: { id: movie.id } }}>Buy Tickets</Link></button>
    </div>
  );
};

export default Card;
