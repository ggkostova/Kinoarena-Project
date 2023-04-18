import React, { useState } from 'react';
import './Program.css';
import ProgramCard from '../components/ProgramCard';
import localStorageManager from "../services/LocalStorageManager";
import { useEffect } from 'react';
import delayFunction from '../DelayFunction';

export default function MovieProgram() {
    const [age, setAge] = useState('');
    const [cinema, setCinema] = useState('');
    const [movie, setMovie] = useState('');
    const [date, setDate] = useState('');
    const [movies, setMovies] = useState('');

    useEffect(() => {
        delayFunction(localStorageManager.getItem, ["movies"]).then((res) => {
            setMovies(res)
        });
    }, []);

    return (
        <div>

            <h2>Movie Program</h2>
            <div className='programFilters'>
                <input
                    type="number"
                    id="age"
                    placeholder='Age...'
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    id="cinema-input"
                    placeholder='Cinema...'
                    value={cinema}
                    onChange={(e) => setCinema(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    id="movie"
                    placeholder='Movie...'
                    value={movie}
                    onChange={(e) => setMovie(e.target.value)}
                />
                <br />
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
                {movies && movies.map(movie => (
                    <ProgramCard
                        key={movie.id}
                        movie={movie}
                    />
                ))}
            </div>
        </div>
    );
}

