import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const LOGIN_URL = 'http://localhost:3000/login'

const initialState = {
  user: null,
  status: 'idle',
  error: null,
};

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(LOGIN_URL, { email, password });
      return response.data;
    } catch (error) {
      // Handle login error
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(loginUser.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        loginUser: action.payload,
        error: null,
        
      }))
      .addCase(loginUser.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default userSlice.reducer;

