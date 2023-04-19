import './Seats.css';
import React, { useState } from "react";
import { useSelector, useDispatch  } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import seat from  "../seat.png";

function Seat({ row, seat, isReserved, isSelected, onSelect }) {
  const handleClick = () => {
    if (!isReserved) {
      onSelect(row, seat);
    }
  };

 return (
    <div
      className={`seat ${isReserved ? "reserved" : ""} ${
        isSelected ? "selected" : ""
      }`}
      onClick={handleClick}
    >
      {seat}
    </div>
  );
}
 
function SeatRow({ row, seats, reservedSeats, selectedSeats, onSelect }) {
  return (
    <div className="row">
      {seats.map((seat) => {
        const isReserved = reservedSeats.includes(`${row}${seat}`);
        const isSelected = selectedSeats.includes(`${row}${seat}`);
 
        return (
          <Seat
            key={`${row}${seat}`}
            row={row}
            seat={seat}
            isReserved={isReserved}
            isSelected={isSelected}
            onSelect={onSelect}
          />
        );
      })}
    </div>
  );
}
 
function SeatLayout({ numRows, numSeatsPerRow, reservedSeats, selectedSeats, onSelect }) {
  const seatRows = [];
 
  for (let i = 0; i < numRows; i++) {
    const row = String.fromCharCode(65 + i);
    const seats = Array.from({ length: numSeatsPerRow }, (_, index) => index + 1);
 
    seatRows.push(
      <SeatRow
        key={row}
        row={row}
        seats={seats}
        reservedSeats={reservedSeats}
        selectedSeats={selectedSeats}
        onSelect={onSelect}
      />
    );
  }
 
  return (
    <div className="seat-layout">
      {seatRows}
    </div>
  );
}
 
function generateRandomId() {
  return Math.floor(Math.random() * 1000000);
}
 
function CinemaHall(props) {
  const [reservedSeats, setReservedSeats] = useState(["A1", "B7", "C3"]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();
 
 
  const handleSeatSelect = (row, seat) => {
    const seatId = `${row}${seat}`;
 
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };
 
  const { cinema, movieName, date, username } = useSelector((state) => state.ticket);
 
  console.log(cinema, movieName, date, username.username);
 
  const handleBookSeats = () => {
 
    const tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    const latestTicket = tickets[tickets.length - 1];

    console.log('Latest ticket:', latestTicket);
 
 
    const { projectionType, projectionTimes } = latestTicket || {};
 
    setReservedSeats([...reservedSeats, ...selectedSeats]);
 
    const bookedTickets = {
      id: generateRandomId(),
      cinema: cinema,
      movieName: movieName,
      date: date,
      projectionType: projectionType, 
      projectionTimes: projectionTimes, 
      username: username.username,
      selectedSeats: selectedSeats,
    };
 
    const storedBookedTickets = JSON.parse(localStorage.getItem("bookedTickets")) || [];
    storedBookedTickets.push(bookedTickets);
    localStorage.setItem("bookedTickets", JSON.stringify(storedBookedTickets));
 
    alert("Ticket purchased successfully!");
 
    setSelectedSeats([]);
    navigate("/profile");
  };
 
 
  return (
    <div className='cinema-hall-container'>
      <h2>Cinema Hall</h2>
        <p className='seats-p'>Screen</p>
      <SeatLayout
        numRows={10}
        numSeatsPerRow={10}
        reservedSeats={reservedSeats}
        selectedSeats={selectedSeats}
        onSelect={handleSeatSelect}
      />
      <button className='seats-btn' onClick={handleBookSeats}>Book Selected Seats</button>
 
    </div>
  );
}
 
export default CinemaHall;