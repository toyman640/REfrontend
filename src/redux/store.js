import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import propertyReducer from './property/propertySlice';
import propetyTypesReducer from './Categories/propTypeSlice';
import ownerTypeReducer from './Categories/ownershipTypeSlice';
import propertyDeatilsReducer from './property/propertyDeatilsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    properties: propertyReducer,
    propertyDetails: propertyDeatilsReducer,
    propertyTypes: propetyTypesReducer,
    ownerTypes: ownerTypeReducer,
  },
});

export default store;
