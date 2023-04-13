import React, { useState } from 'react';
import "./Tickets.css";
import {Link} from 'react-router-dom';
import MOVIES from '../movies';

const TicketsPage = () => {
    const [ticketType, setTicketType] = useState('adult');
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleTicketTypeChange = (e) => {
        setTicketType(e.target.value);
    };

    const handleSeatSelection = (seat) => {
        setSelectedSeats([...selectedSeats, seat]);
    };

    const handleButtonClick = () => {
        // Buy or reserve the selected seats
    };

    let movieId = localStorage.getItem("ticketsId");
    console.log(movieId);

    let movie = MOVIES.filter(movie => movie.id === movieId);
    console.log(movie);

    return (
        <div className='buy-tickets'>
            <img src={movie[0].image_src} alt="Movie Poster" className="movie-poster" />
            <h1>Cinema</h1>
            <h2>{movie[0].name}</h2>
            <p className='tickets-p'>Time: {movie[0].duration}</p>
            <p className='tickets-p'>Projection type: {movie[0].projection_type}</p>
            <h3>Ticket type</h3>
            <select value={ticketType} onChange={handleTicketTypeChange}>
                <option value="adult">Adult</option>
                <option value="child">Child</option>
                <option value="senior">Senior</option>
            </select>
            <button variant="primary"><Link className={'link'} style={{ textDecoration: "none" }} to={'/seats'}>Choose Seats</Link></button>
            {/* Add seat selection logic and UI here */}
            <button onClick={handleButtonClick}>Buy/Reserve</button>
        </div>
    );
};

export default TicketsPage;