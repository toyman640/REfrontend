import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import propertyReducer from './property/propertySlice';
import propetyTypesReducer from './Categories/propTypeSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    properties: propertyReducer,
    propertyTypes: propetyTypesReducer,
  },
});

export default store;
