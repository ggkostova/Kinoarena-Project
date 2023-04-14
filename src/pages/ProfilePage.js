import React from "react";
import './ProfilePage.css';

const ProfilePage = ({ user, favoriteMovies, bookingHistory }) => {
    const handleLogout = () => {
        // Implement logout functionality here
    };

    return (
        <div className="profile-page">
            <h1>User Info</h1>
            <p>Name: </p>
            {/* {user.name} */}
            <p>Email:</p> 
            <p>Age:</p>

            <h2>Booking and Tickets History</h2>
            {/* <ul>
                {bookingHistory.map((booking) => (
                    <li key={booking.id}>{booking.movieName} - {booking.date}</li>
                ))}
            </ul> */}

            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default ProfilePage;