import React, { useState, useEffect } from "react";
import "./ProfilePage.css";
import localStorageManager from "../services/LocalStorageManager";
import { Link } from "react-router-dom";
import userManager from "../services/UserManager";

const ProfilePage = () => {
    const [loggedUser, setLoggedUser] = useState(null);
    const [bookingHistory, setBookingHistory] = useState([]);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("loggedUser"));
        if (user) {
            setLoggedUser(user);
        }
        const bookedTickets = JSON.parse(localStorage.getItem("bookedTickets")) || [];
        const userBookings = bookedTickets.filter(
            (ticket) => user && ticket.username === user.username
        );
        setBookingHistory(userBookings);
    }, []);

    if (!loggedUser) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile-page">
            <h1>User Info</h1>
            <p><strong>Name:</strong> {loggedUser.username}</p>
            {/* <p><strong>Age:</strong> {loggedUser.age}</p> */}

            <h2>Booking and Tickets History</h2>
            <ul className="booking-history">
                {bookingHistory.map((booking) => (
                    <li key={booking.id}>
                       <strong>Cinema:</strong> {booking.cinema} <br />
                       <strong>Movie:</strong> {booking.movieName} <br />
                       <strong>Projection Type:</strong> {booking.projectionType} <br />
                       <strong>Projection Time:</strong> {booking.projectionTimes} <br />
                       <strong>Seats:</strong> {booking.selectedSeats.join(", ")} <br />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProfilePage;
