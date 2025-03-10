// FILE: menuSlice.jsx
// PROJECT: Advanced Web Frameworks - Group2
// PROGRAMMER: Yujung Park
// FIRST VERSION: 2025-03-10
// DESCRIPTION:
// https://thepriyammondal.medium.com/simplifying-state-management-with-redux-toolkit-a-comprehensive-guide-8cc3ef72a13

import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menus",
  initialState: {
    allMenus: [],
  },
  reducers: {
    addMenu: (state, action) => {
      const {id, menu, quantity} = action.payload
      state.allMenus.push({ id, menu, quantity })
      // console.log(state.allMenus[0])
    },
    deleteMenu: (state, action) => {
      state.allMenus = state.allMenus.filter(
        (item) => item.id !== action.payload.id
      );
    },
    editMenu: (state, action) => {
      state.allMenu = state.allMenu.map((item) =>
        item.id === action.payload.id ? { ...item, menu: action.payload.menu } : item
      );
    },
  },
});

export const { addMenu, deleteMenu, editMenu } = menuSlice.actions;
export default menuSlice.reducer

