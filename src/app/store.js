import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import bookHotelReducer from "../features/bookHotel/bookingHotelSlice";
import propertyReducer from "../features/property/propertySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    property: propertyReducer,
    bookHotel: bookHotelReducer,
  },
});
