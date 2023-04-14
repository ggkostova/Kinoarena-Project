import React from "react";
import './Details.css';
import MOVIES from "../movies";
import {Link} from "react-router-dom";

export default function DetailsPage() {

    let movieId = localStorage.getItem("detailsId");
    console.log(movieId);

    let movie = MOVIES.filter(movie => movie.id === movieId);

    const ticketsClick = () => {
        localStorage.setItem("ticketsId", movie[0].id);
    }    

    return (
        <div className="detail-card">
            <div className="detail-card-left">
                <img src={movie[0].image_src} alt="Movie Poster" className="movie-poster" />
                <h2 className="movie-title">{movie[0].name}</h2>
            </div>
            <div className="movie-card-right">
                <div className="movie-details">
                    <p className="details-p"><strong>Duration:</strong> {movie[0].duration}</p>
                    <p className="details-p"><strong>Summary:</strong> {movie[0].summary}</p>
                    <p className="details-p"><strong>Director:</strong> {movie[0].director}</p>
                    <p className="details-p"><strong>Genre:</strong> {movie[0].genre}</p>
                    <p className="details-p"><strong>Cast:</strong> {movie[0].cast}</p>
                    <button className='movie-card-btn' variant="primary" onClick={ticketsClick}><Link className={'link'} style={{ textDecoration: "none" }} to={{ pathname: '/tickets', state: { id: movie.id } }}>Buy Tickets</Link></button>
                </div>
            </div>
        </div>
    );
}