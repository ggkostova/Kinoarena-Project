import { createSlice } from '@reduxjs/toolkit';

const ticketSlice = createSlice({
  name: 'ticket',
  initialState: {
    cinema: '',
    movieName: '',
    date: '',
    username: '',
  },
  reducers: {
    setTicketInfo: (state, action) => {
      state.cinema = action.payload.cinema;
      state.movieName = action.payload.movieName;
      state.date = action.payload.date;
      state.username = action.payload.username;
    },
  },
});


export const { setTicketInfo } = ticketSlice.actions;
export default ticketSlice.reducer;