import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const LOGIN_URL = 'http://localhost:3000/login'

const initialState = {
  user: '',
};

