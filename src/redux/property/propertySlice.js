import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_PROPERTIES_URL = 'http://127.0.0.1:3000/properties';

const initialState = {
  properties: [],
};

export const getProperties = createAsyncThunk(
  'properties/getProperties',
  async () => {
    try {
      const response = await axios.get(GET_PROPERTIES_URL);
      return response.data;
    } catch (error) {
      return error.message;
    }
  },
);

export const createProperty = createAsyncThunk(
  'properties/createProperty',
  async (formDataToSend, thunkAPI) => {
    const headers = {
      'Content-Type': 'multipart/form-data',
      // "X-CSRF-Token": csrfToken,
    };
    await axios.post(GET_PROPERTIES_URL, formDataToSend, {
      headers,
    });

    const response = await axios.get(GET_PROPERTIES_URL);
    thunkAPI.dispatch(getProperties());
    return response.data;
  },
);

const propertySlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProperties.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(getProperties.fulfilled, (state, action) => ({
        // ...state,
        // properties: action.payload,
        // loading: false,
        // error: null,
        ...state,
        properties: action.payload.map(property => ({
          ...property,
          created_by_id_email: property.created_by_id.email, // Assuming email is nested in created_by_id
        })),
        loading: false,
        error: null,

      }))
      .addCase(getProperties.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default propertySlice.reducer;
