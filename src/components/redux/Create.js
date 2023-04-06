import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    Login: (state,action) => {
      state.user = action.payload;
    },
    Logoff:(state)=> {
      state.user = null;
    },
  },
});
export const searchSlice = createSlice({
  name: 'searchlist',
  initialState: {
    searchlist: ["reactjs"],
  },
  reducers: {
    Aadd: (state,action) => {
      state.searchlist = [...state.searchlist, action.payload.value];
    },
    Rremove:(state)=> {
      state.searchlist.shift();
    },
  },
});
export const { Aadd,Rremove }=searchSlice.actions;
export const { Login, Logoff } = userSlice.actions;
export default userSlice.reducer;
