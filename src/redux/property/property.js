import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_PROPERTIES_URL = "http://127.0.0.1:3000/properties"

const initialState = {
  properties: [], 
}

export const getProperties = createAsyncThunk(
  "properties/getProperties",
  async () => {
    try {
     const response = await axios.get(GET_PROPERTIES_URL);
     return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const createProperty = createAsyncThunk(
  "properties/createProperty",
  async(newProperty, thunkAPI) => {
    try {
      const headers = {
        "Content-Type": "application/json",
        // "X-CSRF-Token": csrfToken,
      };
      await axios.post(GET_PROPERTIES_URL, newProperty, {
        headers,
      })

      const response = await axios.get(GET_PROPERTIES_URL);
      thunkAPI.dispatch(getProperties());
      return response.data;
    }
    catch(error) {
      error.message;
    }
  }
)
