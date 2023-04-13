import React, { useState } from 'react';
import './Program.css';
import MOVIES from '../movies';
import ProgramCard from '../components/ProgramCard';
import LocalStorageManager from "../services/LocalStorageManager";


export default function MovieProgram() {
    const [age, setAge] = useState('');
    const [cinema, setCinema] = useState('');
    const [movie, setMovie] = useState('');
    const [date, setDate] = useState('');

    let movies = LocalStorageManager.getMoviesFromLocalStorage();
    console.log(movies[0]);

    return (
        <div>

            <h2>Movie Program</h2>
            <div className='programFilters'>
                {/* <label htmlFor="age">Age:</label> */}
                <input
                    type="number"
                    id="age"
                    placeholder='Age...'
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <br />
                {/* <label htmlFor="cinema">Cinema:</label> */}
                <input
                    type="text"
                    id="cinema"
                    placeholder='Cinema...'
                    value={cinema}
                    onChange={(e) => setCinema(e.target.value)}
                />
                <br />
                {/* <label htmlFor="movie">Movie:</label> */}
                <input
                    type="text"
                    id="movie"
                    placeholder='Movie...'
                    value={movie}
                    onChange={(e) => setMovie(e.target.value)}
                />
                <br />
                {/* <label htmlFor="date">Date:</label> */}
                <input
                    type="date"
                    id="date"
                    placeholder='Date...'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <br />
            </div>
            <p className="program-p">
                Age: {age}, Cinema: {cinema}, Movie: {movie}, Date: {date}
            </p>

            <div className="movie-list">
                    {movies.map(movie=> (
                        <ProgramCard 
                        key={movie.id}
                        movie={movie} 
                        />
                    ))}
                </div>
        </div>
    );
}

