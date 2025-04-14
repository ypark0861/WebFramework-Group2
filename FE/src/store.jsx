// FILE: store.jsx
// PROJECT: Advanced Web Frameworks - Group2
// PROGRAMMER: Yujung Park
// FIRST VERSION: 2025-03-09
// DESCRIPTION: 
// https://redux-toolkit.js.org/tutorials/quick-start

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice'
import menuReducer from './reducers/menuSlice'
import userReducer from './reducers/userSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    menus: menuReducer,
    users: userReducer,
  },
})

