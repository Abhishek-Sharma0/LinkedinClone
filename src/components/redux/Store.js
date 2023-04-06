import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Create';
import {searchSlice} from './Create'

const store = configureStore({
  reducer: {
    userstate: userReducer,
    searchstate: searchSlice.reducer,
  },
});
export default store;