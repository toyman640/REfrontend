import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_OWNER_TYPE_URL = 'http://127.0.0.1:3000/ownership_types';

const initialState = {
  ownerTypes: [],
  status: 'idle',
  error: null,
};

export const getOwnerTypes = createAsyncThunk('ownershipTypes/getOwnershipTypes', async () => {
  const response = await axios.get(GET_OWNER_TYPE_URL);
  return response.data;
});

const ownerTypeSlice = createSlice({
  name: 'ownerTypes',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getOwnerTypes.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(getOwnerTypes.fulfilled, (state, action) => ({
        ...state,
        ownerTypes: action.payload,
        loading: false,
        error: null,

      }))
      .addCase(getOwnerTypes.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },

});

export default ownerTypeSlice.reducer;
