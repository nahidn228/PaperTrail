import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface bookState {
  value: number;
}

// Define the initial state using that type
const initialState: bookState = {
  value: 0,
};

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
});



export default bookSlice.reducer;
