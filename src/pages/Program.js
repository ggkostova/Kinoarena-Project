import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./Program.css";
import ProgramCard from "../components/ProgramCard";
import MOVIES from "../movies";

export default function MovieProgram() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const initialSelectedCinema = searchParams.get("cinema") || "";
    const [selectedCinema, setSelectedCinema] = useState('');
    const [movies, setMovies] = useState(MOVIES);
    const [selectedMovie, setSelectedMovie] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);
    const { movieId } = useParams();
    const [tickets, setTickets] = useState([]);

    const handleAddTicket = (ticket) => {
        setTickets((prevTickets) => [...prevTickets, ticket]);
    };

    useEffect(() => {
        setSelectedCinema(initialSelectedCinema);
    }, [initialSelectedCinema]);

    useEffect(() => {
        console.log(selectedCinema);
        if (selectedCinema === "default" || selectedCinema === '') {
            setMovies(MOVIES);
            setFilteredMovies(MOVIES);
        } else {
            const filtered = MOVIES.filter((movie) => 
                movie.cinemas.some((cinema) => cinema.name === selectedCinema)
            )
            setMovies(filtered);
            setFilteredMovies(filtered);
        }
        setSelectedMovie(""); 
    }, [selectedCinema]);

    useEffect(() => {
        if(selectedMovie === "default" || selectedMovie === ''){
            if(selectedCinema === "default" || selectedCinema === ''){
                setMovies(MOVIES);
                setFilteredMovies(MOVIES);
            }else{
                const filtered = MOVIES.filter((movie) =>
                movie.cinemas.some((cinema) => cinema.name === selectedCinema));
                setMovies(filtered);
                setFilteredMovies(filtered);
            }
        } 
        else {
            const filtered = MOVIES.filter((movie) =>
                movie.name.includes(selectedMovie)
            );
            setMovies(filtered);
            setFilteredMovies(filtered);
        }
    }, [selectedMovie]);

    return (
        <div className="program-page">
            <h2>Movie Program</h2>
            <div className="program-filters">
                <select
                    id="cinema"
                    name="cinema"
                    value={selectedCinema}
                    onChange={(e) => setSelectedCinema(e.target.value)}
                    required
                    style={{ height: "30px" }}
                >
                    <option value="default">Choose cinema...</option>
                    <option value="КИНО АРЕНА GRAND MALL ВАРНА">
                        КИНО АРЕНА GRAND MALL ВАРНА
                    </option>
                    <option value="КИНО АРЕНА BULGARIA MALL">
                        КИНО АРЕНА BULGARIA MALL
                    </option>
                    <option value="КИНО АРЕНА МОЛ ВАРНА">КИНО АРЕНА МОЛ ВАРНА</option>
                    <option value="КИНО АРЕНА МОЛ МАРКОВО ТЕПЕ">
                        КИНО АРЕНА МОЛ МАРКОВО ТЕПЕ
                    </option>
                    <option value="КИНО АРЕНА THE MALL">КИНО АРЕНА THE MALL</option>
                </select>
                <select
                    value={selectedMovie}
                    onChange={(e) => setSelectedMovie(e.target.value)}
                >
                    <option value="default">Select a movie...</option>
                    {filteredMovies.map((movie) => (
                        <option key={movie.id} value={movie.name}>
                            {movie.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="movie-list-program">
                {movies &&
                    movies.map((movie) => <ProgramCard 
                                            key={movie.id}
                                            movie={movie} 
                                            movieId={movieId}
                                            onAddTicket={handleAddTicket}/>)}
            </div>
        </div>
    );
}
