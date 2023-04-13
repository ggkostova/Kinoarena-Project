import MOVIES from "../movies";

class LocalStorageManager {
    movies = [];

    constructor() {
        MOVIES.forEach((movie) => {
            this.movies.push(movie);
        });

    }
    setMoviesInLocalStorage() {
        localStorage.setItem("movies", JSON.stringify(this.movies));
    }
    getMoviesFromLocalStorage(){
        this.movies = JSON.parse(localStorage.getItem("movies"));
        return this.movies;
    }
}
let localStorageManager = new LocalStorageManager();

export default localStorageManager;