import React from "react";
import './ProfilePage.css';

const ProfilePage = ({ user, favoriteMovies, bookingHistory }) => {
    const handleLogout = () => {
        // Implement logout functionality here
    };

    return (
        <div className="profile-page">
            <h1>User Info</h1>
            {/* <p>Name: {user.name}</p> */}
            {/* <p>Email: {user.email}</p> */}
            {/* <p>Age: {user.age}</p> */}

            <h2>Favourite Movies</h2>
            <ul>
                {/* {favoriteMovies.map((movie) => (
                    <li key={movie.id}>{movie.name}</li>
                ))} */}
            </ul>

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