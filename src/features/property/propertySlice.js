import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// First, create the thunk
export const fetchProperties = createAsyncThunk(
  "property/fetchProperties",
  async () => {
    const response = await axios.get(
      "https://bayut.p.rapidapi.com/properties/list",
      {
        params: {
          locationExternalIDs: "5002,6020",
          purpose: "for-rent",
          hitsPerPage: "6",
          page: "0",
          lang: "en",
          sort: "city-level-score",
          rentFrequency: "monthly",
          categoryExternalID: "4",
        },
        headers: {
          "X-RapidAPI-Host": "bayut.p.rapidapi.com",
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        },
      }
    );
    return response.data.hits;
  }
);

export const fetchPropertyDetail = createAsyncThunk(
  "property/fetchPropertyDetail",
  async (id) => {
    const response = await axios.get(
      "https://bayut.p.rapidapi.com/properties/detail",
      {
        params: { externalID: `${id}` },
        headers: {
          "X-RapidAPI-Host": "bayut.p.rapidapi.com",
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        },
      }
    );
    return response.data;
  }
);

const initialState = {
  property: [],
  propertyDetail: [],
};

export const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    addProperty: (state, action) => {
      state.property = action.payload;
    },
  },
  extraReducers: {
    [fetchProperties.pending]: () => {
      console.log("Pending");
    },
    [fetchProperties.fulfilled]: (state, { payload }) => {
      console.log("success");
      state.property = payload;
    },
    [fetchProperties.rejected]: () => {
      console.log("Rejected");
    },
    [fetchPropertyDetail.fulfilled]: (state, { payload }) => {
      console.log("successfull");
      state.propertyDetail = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProperty } = propertySlice.actions;
export const getAllProperties = (state) => state.property.property;
export const getPropertyDetail = (state) => state.property.propertyDetail;

export default propertySlice.reducer;
