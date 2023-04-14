import React, { useState } from 'react';
import "./Tickets.css";
import { Link } from 'react-router-dom';
import MOVIES from '../movies';

// const TicketsPage = () => {
//     const [ticketType, setTicketType] = useState('adult');
//     const [selectedSeats, setSelectedSeats] = useState([]);

    function buyTicket(cinema, movieName, date, username) {
        const ticket = {
            cinema: cinema,
            movieName: movieName,
            date: date,
            username: username
        };

        const tickets = JSON.parse(localStorage.getItem("tickets")) || [];

        tickets.push(ticket);

        localStorage.setItem("tickets", JSON.stringify(tickets));
    }

    function BuyTickets() {
        const [filter, setFilter] = React.useState({
          cinema: "theMall",
          movieName: "",
          date: ""
        });
      
        const handleFilterChange = (event) => {
          const { name, value } = event.target;
          setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
        };
      
        const handleSubmit = (event) => {
          event.preventDefault();
      
          // Call the buyTicket function with the selected cinema, movie name, date, and logged-in user
          const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
          if (loggedUser) {
            buyTicket(filter.cinema, filter.movieName, filter.date, loggedUser);
            alert("Ticket purchased successfully!");
          } else {
            alert("You must be logged in to purchase a ticket.");
          }
        };
      
        return (
          <div>
            <form>
              <div className="filter-section">
                <select
                  id="cinema"
                  name="cinema"
                  value={filter.cinema}
                  onChange={handleFilterChange}
                >
                  <option default value="theMall">Choose cinema...</option>  
                  <option value="theMall">КИНО АРЕНА THE MALL</option>
                  <option value="grandMall">КИНО АРЕНА GRAND MALL ВАРНА</option>
                  <option value="bulgariaMall">
                    КИНО АРЕНА ДЕЛУКС BULGARIA MALL
                  </option>
                  <option value="molVarna">КИНО АРЕНА МОЛ ВАРНА</option>
                  <option value="plovdiv">
                    КИНО АРЕНА МОЛ МАРКОВО ТЕПЕ ПЛОВДИВ
                  </option>
                </select>
                <input
                  type="text"
                  name="movieName"
                  value={filter.movieName}
                  onChange={handleFilterChange}
                  required
                  placeholder="Movie Name..."
                />
                <input
                  type="text"
                  name="date"
                  value={filter.date}
                  onChange={handleFilterChange}
                  required
                  placeholder="Date..."
                />
                <button variant="primary"><Link className={'link'} style={{ textDecoration: "none" }} to={'/seats'}>Choose Seats</Link></button>

                {/* <button onClick={handleSubmit} className="filter-btn" variant="primary" type="submit">Buy Tickets</button> */}
              </div>
            </form>
          </div>
        );
      }
      
      export default BuyTickets;

    // const handleTicketTypeChange = (e) => {
    //     setTicketType(e.target.value);
    // };

    // const handleSeatSelection = (seat) => {
    //     setSelectedSeats([...selectedSeats, seat]);
    // };

    // const handleButtonClick = () => {
    //     // Buy or reserve the selected seats
    // };

    // let movieId = localStorage.getItem("ticketsId");
    // console.log(movieId);

    // let movie = MOVIES.filter(movie => movie.id === movieId);
    // console.log(movie);

//     return (
//         <div className='buy-tickets'>
//             <div>
//                 <img src={movie[0].image_src} alt="Movie Poster" className="movie-poster" />
//             </div>
//             <div className='right-side'>
//                 <h1>Cinema</h1>
//                 <h1>{movie[0].name}</h1>
//                 <p className='tickets-p'>Time: {movie[0].duration}</p>
//                 <p className='tickets-p'>Projection type: {movie[0].projection_type}</p>
//                 <h3>Ticket type</h3>
//                 <select value={ticketType} className='select-age' onChange={handleTicketTypeChange}>
//                     <option value="adult">Under 18</option>
//                     <option value="child">Student</option>
//                     <option value="senior">Adult</option>
//                 </select>
//                 <button variant="primary"><Link className={'link'} style={{ textDecoration: "none" }} to={'/seats'}>Choose Seats</Link></button>
//                 {/* Add seat selection logic and UI here */}
//                 <button onClick={handleButtonClick}>Buy / Reserve</button>
//             </div>

//         </div>
//     );
// };

// export default TicketsPage;