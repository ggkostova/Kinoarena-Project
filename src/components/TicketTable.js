import React from 'react';
import "./TicketsTable.css"

function TicketTable({ tickets, setTickets, onTotalChange }) {
  const updateTotal = (updatedTickets) => {
    const newTotal = updatedTickets.reduce((sum, ticket) => sum + ticket.count * ticket.price, 0);
    onTotalChange(newTotal);
  };

  const handleIncrease = (index) => {
    const newTickets = [...tickets];
    newTickets[index].count += 1;
    setTickets(newTickets);
    updateTotal(newTickets);
  };
  
  const handleDecrease = (index) => {
    if (tickets[index].count > 0) {
      const newTickets = [...tickets];
      newTickets[index].count -= 1;
      setTickets(newTickets);
      updateTotal(newTickets);
    }
  };

  const totalPrice = tickets.reduce((sum, ticket) => sum + ticket.count * ticket.price, 0);

  return (
    <table className="ticket-table">
      <thead>
        <tr>
          <th>Ticket Type</th>
          <th className='count-th'>Count</th>
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
                <button className='tickets-table-btn' onClick={() => handleDecrease(index)}>-</button>
                <input
                  type="number"
                  value={ticket.count}
                  readOnly
                  className="count-input"
                />
                <button className='tickets-table-btn' onClick={() => handleIncrease(index)}>+</button>
              </div>
            </td>
            <td>${ticket.price}</td>
            <td>${ticket.count * ticket.price}</td>
          </tr>
        ))}
        <tr>
          <td></td>
          <td></td>
          <td>Total price:</td>
          <td>${totalPrice}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TicketTable;
