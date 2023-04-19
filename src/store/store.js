import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "./ticketSlice";
import movieIdReducer from "./movieIdSlice";

const store = configureStore({
  reducer: {
    ticket: ticketReducer,
    movieId: movieIdReducer,
  },
});

export default store;