import React from "react";
import "./Tickets.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTicketInfo } from "../store/ticketSlice";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import MovieInfoCard from "../components/MovieInfoCard";
import TicketTable from "../components/TicketTable";


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
    projectionType: "",
    projectionTimes: ""
  });

  const [movie, setMovie] = React.useState(null);
  const [tickets, setTickets] = React.useState([]);

  React.useEffect(() => {
    const prePurchaseInfo = JSON.parse(localStorage.getItem("prePurchaseInfo"));
    if (prePurchaseInfo) {
      setMovie(prePurchaseInfo);
    }

    const ticketData = [
      { type: "Adult", count: 0, price: 10 },
      { type: "Child", count: 0, price: 6 },
      { type: "Senior", count: 0, price: 8 },
    ];
    setTickets(ticketData);
  }, []);
 
 
 
 
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
      <div className="tickets-content">
        <div className="left-side">
          <MovieInfoCard />
        </div>
        <div className="right-side">
          <TicketTable tickets={tickets} setTickets={setTickets} />
        </div>
      </div>
    </div>
  );
}

 
export default BuyTickets;