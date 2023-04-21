import React from "react";
import "./CinemaCard.css";
import { Link } from "react-router-dom";

const CinemaCard = ({ cinema }) => {
    console.log(cinema.name);
  return (
    <div className="CinemaCard">
      <img src={cinema.image} alt="Profile" className="cinema-card-img" />
      <div className="card-info">
        <p>{cinema.name}</p>
        <p>{cinema.address}</p>
        <p>{cinema.phone}</p>
        <button className="cinema-card-btn" variant="primary">
          <Link
            className={"link"}
            to={`/program?cinema=${encodeURIComponent(cinema.name)}`}
            style={{ textDecoration: "none" }}
          >
            View Program
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CinemaCard;
