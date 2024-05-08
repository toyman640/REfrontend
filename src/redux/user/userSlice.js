import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import CryptoJS from 'crypto-js';

const LOGIN_URL = 'http://127.0.0.1:3000/login';
const LOGOUT_URL = 'http://127.0.0.1:3000/logout';
const GET_CURRENT_USER_URL = 'http://127.0.0.1:3000/current_user';

const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;

// // Function to encrypt token
const encryptData = (data) => CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();

// // Function to decrypt token
const decryptData = (encryptedData) => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

const getInitialState = () => {
  const storedUser = localStorage.getItem('user');
  const storedAuthToken = localStorage.getItem('authToken');

  return {
    user: storedUser ? JSON.parse(storedUser) : null,
    status: 'idle',
    error: null,
    authToken: storedAuthToken ? decryptData(storedAuthToken) : null,
  };
};

// console.log(authToken);

const initialState = getInitialState();

// const initialState = {
//   user: null,
//   authToken: null,

// }

// export const loginUser = createAsyncThunk(
//   'user/loginUser',
//   async (userData) => {
//     try {
//       const headers = {
//         'Content-Type': 'application/json',
//       };

//       const response = await axios.post(LOGIN_URL, userData, {
//         headers,
//       });

//       const authToken = response.headers.authorization;
//       return { user: response.data, authToken };
//       // /return response.data;
//     } catch (error) {
//       throw error;
//     }
//   },
// );

// export const logOutUser = createAsyncThunk(
//   'user/logOutUser',
//   async (_, { getState }) => { // Accept authToken as an argument
//     try {
//       // console.log(authToken);
//       const state = getState(); // Get the current state
//       const authToken = state.user.authToken || initialState.authToken;

//       if (!authToken) {
//         // Handle the case where authToken is not available
//         throw new Error('Auth token not found.');
//       }
//       const headers = {
//         Authorization: authToken, // Include authToken in headers
//       };

//       const response = await axios.delete(LOGOUT_URL, { headers });

//       if (response.status === 200) {
//         // Clear local storage if logout is successful
//         localStorage.removeItem('user');
//         localStorage.removeItem('authToken');
//       }

//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   },
// );

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userData) => {
    const headers = {
      'Content-Type': 'application/json',
    };

    const response = await axios.post(LOGIN_URL, userData, {
      headers,
    });

    const authToken = response.headers.authorization;
    return { user: response.data, authToken };
  },
);

export const getCurrentUser = createAsyncThunk(
  'user/getCurrentUser',
  async (_, { getState }) => {
    const state = getState();
    const authToken = state.user.authToken || initialState.authToken;

    if (!authToken) {
      // Handle the case where authToken is not available
      throw new Error('Auth token not found.');
    }
    // const headers = {
    //   Authorization: authToken, // Include authToken in headers
    // };

    const response = await axios.get(GET_CURRENT_USER_URL);
    return response.data;
  },
);

export const logOutUser = createAsyncThunk(
  'user/logOutUser',
  async (_, { getState }) => { // Accept authToken as an argument
    const state = getState(); // Get the current state
    const authToken = state.user.authToken || initialState.authToken;

    if (!authToken) {
      // Handle the case where authToken is not available
      throw new Error('Auth token not found.');
    }
    const headers = {
      Authorization: authToken, // Include authToken in headers
    };

    const response = await axios.delete(LOGOUT_URL, { headers });

    if (response.status === 200) {
      // Clear local storage if logout is successful
      localStorage.removeItem('user');
      localStorage.removeItem('authToken');
    }

    return response.data;
  },
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
        state.user = action.payload.user.data;
        state.authToken = action.payload.authToken;
        state.status = 'idle';
        state.error = null;
        // localStorage.clear();

        // Save data to localStorage
        localStorage.setItem('user', JSON.stringify(state.user));
        localStorage.setItem('authToken', encryptData(state.authToken));

        return state;
      })
      .addCase(loginUser.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default userSlice.reducer;
