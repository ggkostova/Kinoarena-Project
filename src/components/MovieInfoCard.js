import React from 'react';
import "./MovieInfoCard.css";

function MovieInfoCard() {
  const [movie, setMovie] = React.useState(null);

  React.useEffect(() => {
    const prePurchaseInfo = JSON.parse(localStorage.getItem("tickets"));
    if (prePurchaseInfo) {
      setMovie(prePurchaseInfo);
    }
  }, []);

  console.log(movie);

  if (!movie) return null;

  return (
    <div className="movie-card">
      <h3>{movie.movieName}</h3>
      <p>Cinema: {movie.cinema}</p>
      <p>Time: {movie.time}</p>
      <p>Projection Type: {movie.projectionType}</p>
    </div>
  );
}

export default MovieInfoCard;

