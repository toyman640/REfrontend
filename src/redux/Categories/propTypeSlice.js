import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_PROPERTY_TYPE_URL = "http://127.0.0.1:3000/property_types"

const initialState = {
  propertyTypes: [],
  status: 'idle',
  error: null,
}

export const getPropertyTypes = createAsyncThunk('propertyTypes/getPropertyTypes', async () => {
  try {
    const response = await axios.get(GET_PROPERTY_TYPE_URL);
    return response.data;
  } catch (err) {
    throw err
  }
});


const propetyTypesSlice = createSlice({
  name: 'propertyTypes',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPropertyTypes.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(getPropertyTypes.fulfilled, (state, action) => ({
        ...state,
        propertyTypes: action.payload,
        loading: false,
        error: null,

      }))
      .addCase(getPropertyTypes.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }))
  }

})

export default propetyTypesSlice.reducer;
