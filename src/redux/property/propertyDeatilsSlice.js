import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_PROPERTITY_DETAILS_URL = 'http://127.0.0.1:3000/properties/';


const initialState = {
  propertyDetails: null,
  loading: false,
  error: null,
};

// Async thunk to fetch property details
export const getPropertyDetails = createAsyncThunk(
  'properties/getPropertyDetails',
  async (propertyId, thunkAPI) => {
    try {
      const response = await axios.get(`${GET_PROPERTITY_DETAILS_URL}/${propertyId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


const propertyDetailsSlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPropertyDetails.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(getPropertyDetails.fulfilled, (state, action) => ({
        ...state,
        propertyDetails: action.payload,
        error: null,
      }))
      .addCase(getPropertyDetails.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default propertyDetailsSlice.reducer;
