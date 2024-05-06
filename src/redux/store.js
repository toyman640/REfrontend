import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import propertyReducer from './property/propertySlice'
import propertySlice from './property/propertySlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    properties: propertySlice
  },
});

export default store;
