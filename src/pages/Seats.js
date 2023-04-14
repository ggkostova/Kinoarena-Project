import './Seats.css';
import React, { useState } from "react";
import BuyTickets from './Tickets';

function Seat({ row, seat, isReserved, isSelected, onSelect }) {
  const handleClick = () => {
    if (!isReserved) {
      onSelect(row, seat);
    }
  };

  
//   const tickets = JSON.parse(localStorage.getItem("tickets")) || [];
//   console.log(tickets);
//   setCinema(tickets.cinema);
//   setMovieName(tickets.movieName);
//   setDate(tickets.date);
//   setUsername(tickets.user);

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

function CinemaHall(props) {
  const [reservedSeats, setReservedSeats] = useState(["A1", "B7", "C3"]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const {cinema, movieName, date, user} = props;

  const handleSeatSelect = (row, seat) => {
    const seatId = `${row}${seat}`;

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  console.log(cinema, movieName, date, user);

  
  const handleBookSeats = () => {
    setReservedSeats([...reservedSeats, ...selectedSeats]);
    setSelectedSeats([]);
  };

  return (
    <div>
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




