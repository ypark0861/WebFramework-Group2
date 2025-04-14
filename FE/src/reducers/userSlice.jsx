// FILE: userSlice.jsx
// PROJECT: Advanced Web Frameworks - Group2
// PROGRAMMER: Yujung Park
// FIRST VERSION: 2025-04-14

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: 'unknownuser',
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      console.log(state.user);
    },
    logout: (state) => {
      state.user = 'unknownuser'
    },
  },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer