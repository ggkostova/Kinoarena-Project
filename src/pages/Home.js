import React, { useState, useEffect } from "react";
import "./Home.css";
import MOVIES from "../movies";
import Card from "../components/MovieCard";
import { useDispatch } from "react-redux";
import { setTicketInfo } from "../store/ticketSlice";
import MovieBanner from "../components/MovieBanner";
import { useNavigate } from "react-router-dom";
import FilterSection from "../services/FilterSection";
import localStorageManager from "../services/LocalStorageManager";

function HomePage(props) {
  function buyTicket(
    cinema,
    movieName,
    date,
    projectionType,
    projectionTimes,
    username
  ) {
    const ticket = {
      cinema: cinema,
      movieName: movieName,
      date: date,
      projectionType: projectionType,
      projectionTimes: projectionTimes,
      username: username,
    };

    const tickets = JSON.parse(localStorage.getItem("tickets")) || [];

    tickets.push(ticket);

    localStorageManager.setItem("tickets", tickets);
  }

  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState({
    city: "",
    movieName: "",
    date: "",
    projectionType: "",
    projectionTimes: "",
    cinema: "",
  });

  const [currentTrailer, setCurrentTrailer] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const convertToEmbedURL = (url) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&\S+)?/g;
    const match = regex.exec(url);
    return match ? `https://www.youtube.com/embed/${match[1]}` : "";
  };

  const handleTrailerBtn = (trailer) => {
    setCurrentTrailer(convertToEmbedURL(trailer));
  };

  const closeTrailer = () => {
    setCurrentTrailer(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    if (loggedUser) {
      buyTicket(
        filter.cinema,
        filter.movieName,
        filter.date,
        filter.projectionType,
        filter.projectionTimes,
        loggedUser
      );

      dispatch(setTicketInfo({ ...filter, username: loggedUser }));

      navigate("/seats");
    } else {
      alert("You must be logged in to purchase a ticket.");
    }
  };

  useEffect(() => {
    if (filter.cinema === "default" || filter.projectionType === "default") {
      setMovies(MOVIES);
    } else {
      const filteredMovies = MOVIES.filter(
        (movie) =>
          (!filter.projectionType ||
            movie.cinemas.some((cinema) =>
              cinema.projection_types.some(
                (projection_type) =>
                  projection_type.type === filter.projectionType
              )
            )) &&
          (!filter.cinema ||
            movie.cinemas.some((cinema) => cinema.name === filter.cinema))
      );
      setMovies(filteredMovies);
    }
  }, [filter]);

  const handleCardClick = () => {
    props.setMovieId(props.movieId);
    console.log(props.movieId);
    navigate("/details");
  };

  return (
    <div className="movie-page">
      <div className="movie-adds-section">
        <MovieBanner />
      </div>
      <FilterSection
        filter={filter}
        setFilter={setFilter}
        onSubmit={handleSubmit}
      />
      <div className="movie-list-section">
        {movies &&
          movies.map((movie) => (
            <Card
              key={movie.id}
              movie={movie}
              onTrailerBtnClick={handleTrailerBtn}
            />
          ))}
      </div>
      {currentTrailer && (
      <div className="modal">
        <div className="modal-content">
          <button className="close-trailer-btn" onClick={closeTrailer}>
            X
          </button>
          <iframe
            title="trailer"
            width="100%"
            height="100%"
            src={`${currentTrailer}?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    )}
    </div>
  );
}

export default HomePage;
