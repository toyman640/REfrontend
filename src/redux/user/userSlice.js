import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import CryptoJS from "crypto-js";

const LOGIN_URL = 'http://127.0.0.1:3000/login';
const LOGOUT_URL = 'http://127.0.0.1:3000/logout';

// const encryptData = (data) => {
//   return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
// };

// // Function to decrypt data using CryptoJS
// const decryptData = (encryptedData) => {
//   const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
//   return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
// };


// const getInitialState = () => {
//   const storedUser = localStorage.getItem('user');
//   const storedAuthToken = localStorage.getItem('authToken');

//   return {
//     user: storedUser ? JSON.parse(storedUser) : null,
//     status: 'idle',
//     error: null,
//     authToken: storedAuthToken ? storedAuthToken : null,
//   };
// };

// const initialState = getInitialState();

const initialState = {
  user: null,

}

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userData) => {
    try {
      const headers = {
        "Content-Type": "application/json",
      };

      const response = await axios.post(LOGIN_URL, userData, {
        headers,
      });

      // const authToken = response.headers['authorization'];
      console.log(response);
      // return { user: response.data, authToken };
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const logOutUser = createAsyncThunk(
  'user/logOutUser',
  async (authToken) => { // Accept authToken as an argument
    try {
      // const headers = {
      //   "Authorization": authToken, // Include authToken in headers
      // };

      const response = await axios.delete(LOGOUT_URL, {headers: { "Authorization":  authToken }});

      if (response.status === 200) {
        // Clear local storage if logout is successful
        localStorage.removeItem('user');
        localStorage.removeItem('authToken');
      }

      return response.data;
    } catch (error) {
      throw error;
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
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log('Action:', action);
        state.user = action.payload.data;
        // state.authToken = action.payload.authToken;
        state.status = 'idle';
        state.error = null;

        // Save data to localStorage
        // localStorage.setItem('user', JSON.stringify(state.user));
        // localStorage.setItem('authToken', encryptData(state.authToken));

        // return state;
        
      })
      .addCase(loginUser.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default userSlice.reducer;

