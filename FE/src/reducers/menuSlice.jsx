// FILE: menuSlice.jsx
// PROJECT: Advanced Web Frameworks - Group2
// PROGRAMMER: Yujung Park
// FIRST VERSION: 2025-03-10
// DESCRIPTION:
// https://thepriyammondal.medium.com/simplifying-state-management-with-redux-toolkit-a-comprehensive-guide-8cc3ef72a13
// https://medium.com/@kmraman11011/title-building-a-todo-app-with-react-and-redux-toolkit-5ae2740048c3

import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menus",
  initialState: {
    allMenus: [],
    allNutrition: {
      calories: 0.0,
    },
    savedMenuList: []
  },
  reducers: {
    addMenu: (state, action) => {
      const {id, menu, quantity, nutrition} = action.payload
      state.allMenus.push({ id, menu, quantity, nutrition })

      state.allNutrition.calories += nutrition.calories/100*quantity;
    },
    deleteMenu: (state, action) => {
      // state.allMenus = state.allMenus.filter(
      //   (item) => item.id !== action.payload.id
      // );
      console.log(action.payload);
      state.allNutrition.calories -= action.payload.nutrition.calories/100*action.payload.quantity;
      const index = state.allMenus.findIndex((item) => item.id === action.payload.id);
      
      // console.log(index);      
      if (deleteMenu !== -1) {
        state.allMenus.splice(index, 1);
      }
    },
    editMenu: (state, action) => {
      state.allMenu = state.allMenu.map((item) =>
        item.id === action.payload.id ? { ...item, menu: action.payload.menu } : item
      );
    },
    deleteAllMenu: (state, action) => {
      state.allMenus = [];
      state.allNutrition.calories = 0.0; 
    },
    addSavedMenuList: (state, action) => {
      state.savedMenuList = action.payload;
    },
  },
});

export const { addMenu, deleteMenu, editMenu, deleteAllMenu, addSavedMenuList } = menuSlice.actions;
export default menuSlice.reducer