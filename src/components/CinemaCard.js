import React from 'react';
import './CinemaCard.css';
import { Link } from "react-router-dom"

const CinemaCard = ({ cinema }) => {
    return (
        <div className="cinema-card">
            <img src={cinema.image} alt="Profile" className="cinema-card-img" />
            <div className="card-info">
                <h2>{cinema.name}</h2>
                <p>{cinema.address}</p>
                <p>{cinema.phone}</p>
                <button variant="primary"><Link className={'link'} to={'/program'}>View Program</Link></button>
            </div>
        </div>
    );
};

export default CinemaCard;