import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import propertyReducer from './property/propertySlice';
import propetyTypesReducer from './Categories/propTypeSlice';
import ownerTypeReducer from './Categories/ownershipTypeSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    properties: propertyReducer,
    propertyTypes: propetyTypesReducer,
    ownerTypes: ownerTypeReducer,
  },
});

export default store;
