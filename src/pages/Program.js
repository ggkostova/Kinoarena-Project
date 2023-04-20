import React, { useState } from 'react';
import './Program.css';
import ProgramCard from '../components/ProgramCard';
import { useEffect } from 'react';
import MOVIES from '../movies';

export default function MovieProgram() {
    const [selectedCinema, setSelectedCinema] = useState('');
    const [movies, setMovies] = useState('');
    const [selectedMovie, setSelectedMovie] = useState('');

    useEffect(() => {
        console.log(selectedCinema);
        if (selectedCinema === "default") {
            setMovies(MOVIES);
        }
        else 
        {
            const filteredMovies = MOVIES.filter((movie) => movie.cinemas.some((cinema) => cinema.name === selectedCinema));
            setMovies(filteredMovies);
        }
    }, [selectedCinema]);

    useEffect(() => {
        if(selectedMovie === "default"){
            setMovies(MOVIES);
        }
        else
        {
            const filteredMovies = MOVIES.filter((movie) => movie.name.includes(selectedMovie));
            setMovies(filteredMovies);
        }
    }, [selectedMovie])

    return (
        <div className='program-page'>
            <h2>Movie Program</h2>
            <div className='program-filters'>
                <select
                    id="cinema"
                    name="cinema"
                    value={selectedCinema}
                    onChange={(e) => setSelectedCinema(e.target.value)}
                    required
                    style={{ height: '30px' }}
                >
                    <option value="default">Choose cinema...</option>
                    <option value="КИНО АРЕНА GRAND MALL ВАРНА">
                        КИНО АРЕНА GRAND MALL ВАРНА
                    </option>
                    <option value="КИНО АРЕНА ДЕЛУКС BULGARIA MALL">
                        КИНО АРЕНА ДЕЛУКС BULGARIA MALL
                    </option>
                    <option value="КИНО АРЕНА МОЛ ВАРНА">
                        КИНО АРЕНА МОЛ ВАРНА
                    </option>
                    <option value="КИНО АРЕНА МОЛ МАРКОВО ТЕПЕ ПЛОВДИВ">
                        КИНО АРЕНА МОЛ МАРКОВО ТЕПЕ ПЛОВДИВ
                    </option>
                    <option value="КИНО АРЕНА THE MALL">
                        КИНО АРЕНА THE MALL
                    </option>
                </select>
                <select value={selectedMovie} onChange={(e) => setSelectedMovie(e.target.value)}>
                    <option value="default">Select a movie...</option>
                    {MOVIES.map((movie) => (
                        <option key={movie.id} value={movie.name}>
                            {movie.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="movie-list-program">
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

