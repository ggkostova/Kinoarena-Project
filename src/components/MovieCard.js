import React, { useState } from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom';

const Card = ({ movie, onTrailerBtnClick }) => {
  const handleTrailerBtn = () => {
    onTrailerBtnClick(movie.trailer);
  };
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="movie-card-container">
      <img src={movie.image_src} alt={movie.name} id="movieCard" className="movie-card-img" />
      <h3>{movie.name}</h3>
      <p>Genre: {movie.genre}</p>
      <p>Premiere: {movie.premiere}</p>
      <div>
        <button className="movie-card-btn" variant="primary">
          <Link className={'link'} style={{ textDecoration: 'none' }} to={'/details/' + movie.id}>
            Details
          </Link>
        </button>
        <button className="movie-card-btn" onClick={handleTrailerBtn} variant="primary">
          Trailer
        </button>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <iframe
              title="trailer"
              width="560"
              height="315"
              src={`${movie.trailer}?autoplay=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;

