import React from "react";
import './Details.css';
import {Link} from "react-router-dom";
import localStorageManager from "../services/LocalStorageManager";
import {useState, useEffect} from "react";
import delayFunction from "../DelayFunction";

export default function DetailsPage() {
    const [movies, setMovies] = useState('');
    const [movieId, setMovieId] = useState('');

    useEffect(() => {
        delayFunction(localStorageManager.getItem, ["movies"])
        .then((res) => {
            setMovies(res);
        });

        delayFunction(localStorageManager.getItem, ["detailsId"])
        .then((res) => {
            setMovieId(res);
        })
    },[])

    let movieArr = movies && movies.filter(movie => movie.id === movieId);
    let movie = movieArr && movieArr[0];

    const ticketsClick = () => {
        delayFunction(() => localStorageManager.setItem('ticketsId', movieId), []);
    }    

    return (
        <div className="detail-card">
            <div className="detail-card-left">
                <img src={movie && movie['image_src']} alt="Movie Poster" className="movie-poster" /> 
                <h2 className="movie-title">{movie && movie.name}</h2>
            </div>
            <div className="movie-card-right">
                <div className="movie-details">
                    <p className="details-p"><strong>Duration:</strong> {movie && movie.duration}</p>
                    <p className="details-p"><strong>Summary:</strong> {movie && movie.summary}</p>
                    <p className="details-p"><strong>Director:</strong> {movie && movie.director}</p>
                    <p className="details-p"><strong>Genre:</strong> {movie && movie.genre}</p>
                    <p className="details-p"><strong>Cast:</strong> {movie && movie.cast}</p>
                    <button className='movie-card-btn' variant="primary" onClick={ticketsClick}><Link className={'link'} style={{ textDecoration: "none" }} to={{ pathname: '/tickets', state: { id: movie.id } }}>Buy</Link></button>
                </div>
            </div>
        </div>
    );
}