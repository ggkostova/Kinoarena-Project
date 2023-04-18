import React, { useState, useEffect } from "react";
import "./ProfilePage.css";
import localStorageManager from "../services/LocalStorageManager";
import { Link } from "react-router-dom";

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

    const handleLogout = () => {
        localStorageManager.removeItem('loggedUser');
    };

    if (!loggedUser) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile-page">
            <h1>User Info</h1>
            <p>Name: {loggedUser.username}</p>
            <p>Age: {loggedUser.age}</p>

            <h2>Booking and Tickets History</h2>
            <ul className="booking-history">
                {bookingHistory.map((booking) => (
                    <li key={booking.id}>
                        Cinema: {booking.cinema} <br />
                        Movie: {booking.movieName} <br />
                        Date: {booking.date} <br />
                        Projection Type: {booking.projectionType} <br />
                        Projection Time: {booking.projectionTimes} <br />
                        Seats: {booking.selectedSeats.join(", ")} <br />
                    </li>
                ))}
            </ul>

            <button className="logout-button" onClick={handleLogout}><Link to={'/home'}>Logout</Link></button>
        </div>
    );
};

export default ProfilePage;
