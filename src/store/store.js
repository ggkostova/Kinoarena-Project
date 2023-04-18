import { configureStore } from '@reduxjs/toolkit';
import ticketSlice from './ticketSlice';

const store = configureStore({
  reducer: {
    ticket: ticketSlice,
  },
});

export default store;