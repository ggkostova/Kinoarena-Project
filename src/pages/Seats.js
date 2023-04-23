import "./Seats.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import seat from "../seat.png";

function Seat({ row, seat, isReserved, isSelected, onSelect }) {
  const handleClick = () => {
    if (!isReserved) {
      onSelect(row, seat);
    }
  };

  return (
    <div
      id={"one-seat"}
      className={`seat ${isReserved ? "reserved" : ""} ${
        isSelected ? "selected" : ""
      }`}
      onClick={handleClick}
    ></div>
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

function SeatLayout({
  numRows,
  numSeatsPerRow,
  reservedSeats,
  selectedSeats,
  onSelect,
}) {
  const seatRows = [];

  for (let i = 0; i < numRows; i++) {
    const row = String.fromCharCode(65 + i);
    const seats = Array.from(
      { length: numSeatsPerRow },
      (_, index) => index + 1
    );

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

  return <div className="seat-layout">{seatRows}</div>;
}

function generateRandomId() {
  return Math.floor(Math.random() * 1000000);
}

function CinemaHall(props) {
  const [reservedSeats, setReservedSeats] = useState(["A1", "B7", "C3"]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showMaxSeatsAlert, setShowMaxSeatsAlert] = useState(false);

  const updateReservedSeats = (newReservedSeats) => {
    setReservedSeats((prevReservedSeats) => [...prevReservedSeats, ...newReservedSeats]);
  };

  const handleCloseMaxSeatsAlert = () => {
    setShowMaxSeatsAlert(false);
  };
  

  useEffect(() => {
    const bookedTickets = JSON.parse(localStorage.getItem("bookedTickets")) || [];
  
    const latestTicket = JSON.parse(localStorage.getItem("tickets"))?.[0];
    const { cinema, movieName, projectionType, projectionTimes } = latestTicket || {};
  
    const matchingTickets = bookedTickets.filter(
      (ticket) =>
        ticket.cinema === cinema &&
        ticket.movieName === movieName &&
        ticket.projectionType === projectionType &&
        ticket.projectionTimes === projectionTimes
    );
  
    if (matchingTickets.length > 0) {
      console.log("Yes");
      const allSelectedSeats = matchingTickets.flatMap(ticket => ticket.selectedSeats);
      updateReservedSeats(allSelectedSeats);
    } else {
      console.log("No");
    }
  }, []);
  

  const navigate = useNavigate();

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleCloseSuccessAlert = () => {
    setShowSuccessAlert(false);
    navigate("/profile");
  };

  const handleSeatSelect = (row, seat) => {
    const seatId = `${row}${seat}`;
    const ticketsInfo = JSON.parse(localStorage.getItem("tickets"));
    const ticketsCount = ticketsInfo ? ticketsInfo[0].ticketsCount : 0;

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(
        selectedSeats.filter((selectedSeat) => selectedSeat !== seatId)
      );
    } else {
      if (selectedSeats.length < ticketsCount) {
        setSelectedSeats([...selectedSeats, seatId]);
      } else {
        setShowMaxSeatsAlert(true);
      }
    }
  };

  const { cinema, movieName, date, username } = useSelector(
    (state) => state.ticket
  );

  console.log(cinema, movieName, date, username.username);

  const handleBookSeats = () => {
    console.log(JSON.parse(localStorage.getItem("tickets")));

    const tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    const latestTicket = tickets[tickets.length - 1];
    let ticketsInfo = JSON.parse(localStorage.getItem("tickets"));
    console.log(ticketsInfo[0].ticketsCount);

    console.log("Latest ticket:", latestTicket);

    if (selectedSeats.length < ticketsInfo[0].ticketsCount) {
      setShowAlert(true);
    } else {
      if (latestTicket) {
        const { cinema, movieName, date, projectionType, projectionTimes , totalSum} =
          latestTicket;

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
          totalSum: totalSum
        };

        const storedBookedTickets =
          JSON.parse(localStorage.getItem("bookedTickets")) || [];
        storedBookedTickets.push(bookedTickets);
        localStorage.setItem(
          "bookedTickets",
          JSON.stringify(storedBookedTickets)
        );

        setShowSuccessAlert(true);

        setSelectedSeats([]);
        
      } else {
        alert("Error: Could not retrieve ticket information.");
      }
    }
  };

  return (
    <div className="cinema-hall-container">
      {showMaxSeatsAlert && (
        <div className="custom-alert-overlay">
          <div className="custom-alert">
            <h3>Warning</h3>
            <p>You cannot select more seats than the required count.</p>
            <button
              className="custom-alert-close"
              onClick={handleCloseMaxSeatsAlert}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {showSuccessAlert && (
        <div className="custom-success-alert-overlay">
          <div className="custom-success-alert">
            <h3>Success</h3>
            <p>Ticket purchased successfully!</p>
            <button
              className="custom-success-alert-close"
              onClick={handleCloseSuccessAlert}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {showAlert && (
        <div className="custom-alert-overlay">
          <div className="custom-alert">
            <h3>Warning</h3>
            <p>
              You have selected fewer seats than the required count. Please
              choose more seats.
            </p>
            <button className="custom-alert-close" onClick={handleCloseAlert}>
              Close
            </button>
          </div>
        </div>
      )}
      <div className="screen">
        <span>Screen</span>
      </div>
      <SeatLayout
        numRows={10}
        numSeatsPerRow={10}
        reservedSeats={reservedSeats}
        selectedSeats={selectedSeats}
        onSelect={handleSeatSelect}
      />
      <button className="seats-btn" onClick={handleBookSeats}>
        Book Selected Seats
      </button>
    </div>
  );
}

export default CinemaHall;
