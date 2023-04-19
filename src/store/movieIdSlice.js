import { createSlice } from "@reduxjs/toolkit";

const movieIdSlice = createSlice({
  name: "movieId",
  initialState: "",
  reducers: {
    setMovieId: (state, action) => action.payload,
  },
});

export const { setMovieId } = movieIdSlice.actions;
export default movieIdSlice.reducer;
