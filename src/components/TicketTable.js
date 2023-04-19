import React from 'react';
import "./TicketsTable.css"

function TicketTable({ tickets, setTickets }) {
    const handleIncrease = (index) => {
      const newTickets = [...tickets];
      newTickets[index].count += 1;
      setTickets(newTickets);
    };
  
    const handleDecrease = (index) => {
      if (tickets[index].count > 0) {
        const newTickets = [...tickets];
        newTickets[index].count -= 1;
        setTickets(newTickets);
      }
    };

  return (
     <table className="ticket-table">
    <thead>
      <tr>
        <th>Ticket Type</th>
        <th>Count</th>
        <th>Price</th>
        <th>Sum</th>
      </tr>
    </thead>
    <tbody>
      {tickets.map((ticket, index) => (
        <tr key={index}>
          <td>{ticket.type}</td>
          <td>
            <div className="count-container">
              <button onClick={() => handleDecrease(index)}>-</button>
              <input
                type="number"
                value={ticket.count}
                readOnly
                className="count-input"
              />
              <button onClick={() => handleIncrease(index)}>+</button>
            </div>
          </td>
          <td>${ticket.price}</td>
          <td>${ticket.count * ticket.price}</td>
        </tr>
      ))}
    </tbody>
  </table>
  );
}

export default TicketTable;

