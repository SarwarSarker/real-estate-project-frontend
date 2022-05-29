import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import bookHotelService from "./bookHotelService";

// First, create the thunk
export const bookingHotel = createAsyncThunk(
  "auth/bookHotel",
  async (hotel, { rejectWithValue }) => {
    try {
      return await bookHotelService.bookingHotel(hotel);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

const initialState = {
  bookHotel: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const bookingHotelSlice = createSlice({
  name: "bookHotel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(bookingHotel.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(bookingHotel.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.bookHotel.push(action.payload);
      })
      .addCase(bookingHotel.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = bookingHotelSlice.actions;

export default bookingHotelSlice.reducer;
