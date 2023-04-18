import React from "react";
import "./Tickets.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTicketInfo } from "../store/ticketSlice";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
 
import FilterSection from "../services/FilterSection";
 
function buyTicket(cinema, movieName, date, projectionType, projectionTimes, username) {
  const ticket = {
    cinema: cinema,
    movieName: movieName,
    date: date,
    projectionType: projectionType,
    projectionTimes: projectionTimes,
    username: username,
  };
 
  const tickets = JSON.parse(localStorage.getItem("tickets")) || [];
 
  tickets.push(ticket);
 
  localStorage.setItem("tickets", JSON.stringify(tickets));
}
 
function BuyTickets() {
  const [filter, setFilter] = React.useState({
    cinema: "",
    movieName: "",
    date: "",
    projectionType: "",
    projectionTimes: ""
  });
 
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
 
    if (name === "date") {
      const dateValue = value instanceof Date ? value.toISOString().split("T")[0] : "";
      setFilter((prevFilter) => ({ ...prevFilter, [name]: dateValue }));
    } else {
      setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
    }
  };
 
 
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const handleSubmit = (event) => {
    event.preventDefault();
 
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
 
    if (loggedUser) {
      buyTicket(filter.cinema, filter.movieName, filter.date, filter.projectionType, filter.projectionTimes, loggedUser);
 
      dispatch(setTicketInfo({ ...filter, username: loggedUser }));
 
      navigate("/seats");
    } else {
      alert("You must be logged in to purchase a ticket.");
    }
  };
 
  return (
    <div className="tickets-div">
      <FilterSection filter={filter} setFilter={setFilter} onSubmit={handleSubmit} />
    </div>
  );
}
 
export default BuyTickets;