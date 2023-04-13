import './Seats.css';
import React, { useState } from "react";

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

function CinemaHall() {
  const [reservedSeats, setReservedSeats] = useState(["A1", "B7", "C3"]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelect = (row, seat) => {
    const seatId = `${row}${seat}`;

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  
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
      <button onClick={handleBookSeats}>Book Selected Seats</button>
    </div>
  );
}

export default CinemaHall;


// Seat component representing an individual seat in the cinema hall
// function Seat(props) {
//   const { id, isReserved, isSelected, onSelect } = props;

//   let seatClass = 'seat';
//   if (isReserved) {
//     seatClass += ' reserved';
//   } else if (isSelected) {
//     seatClass += ' selected';
//   }

//   function handleClick() {
//     if (!isReserved) {
//       onSelect(id);
//     }
//   }

//   return <div className={seatClass} onClick={handleClick}></div>;
// }

// // SeatLayout component representing the entire cinema hall layout
// export default function SeatLayout(props) {
//   const { seats, onSeatSelect, selectedSeats } = props;

//   function handleSeatSelect(id) {
//     const index = selectedSeats.indexOf(id);
//     if (index === -1) {
//       // Add seat to selected seats
//       onSeatSelect([...selectedSeats, id]);
//     } else {
//       // Remove seat from selected seats
//       const newSelectedSeats = [...selectedSeats];
//       newSelectedSeats.splice(index, 1);
//       onSeatSelect(newSelectedSeats);
//     }
//   }

//   function handleReserveSeats() {
//     // Call reservation API to reserve selected seats
//     // If successful, update seats array to mark selected seats as reserved
//     // If unsuccessful, display error message
//   }

//   return (
//     <div className="seat-layout">
//       {seats.map((seat) => (
//         <Seat
//           key={seat.id}
//           id={seat.id}
//           isReserved={seat.isReserved}
//           isSelected={selectedSeats.includes(seat.id)}
//           onSelect={handleSeatSelect}
//         />
//       ))}
//       <button onClick={handleReserveSeats}>Reserve Seats</button>
//     </div>
//   );
// }


