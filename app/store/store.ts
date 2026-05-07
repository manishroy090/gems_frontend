import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./features/Hoshpital/counterSlice";
import AuthUserReducer  from './features/Hoshpital/AuthSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    authuser:AuthUserReducer
  },
});