import MOVIES from "../movies";
import delayFunction from "../DelayFunction";

class LocalStorageManager {
    movies = [];

    constructor() {
        MOVIES.forEach((movie) => {
            this.movies.push(movie);
        });

    }

    setItem = (key, value) =>{
        delayFunction(()=>localStorage.setItem(key, JSON.stringify(value)),[]);
    }

    getItem = (key) => {
        return new Promise((res, rej) => {
            const data = JSON.parse(localStorage.getItem(key));
            res(data);
        });
    }
    removeItem = (key) => {
       localStorage.removeItem(key);
    }
}
let localStorageManager = new LocalStorageManager();

export default localStorageManager;