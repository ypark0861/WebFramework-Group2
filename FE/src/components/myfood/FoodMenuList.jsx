// FILE: FoodCard.jsx
// PROJECT: Advanced Web Frameworks - Group2
// PROGRAMMER: Yujung Park
// FIRST VERSION: 2025-03-07
// DESCRIPTION: 
// REFERENCE: https://react.dev/learn/rendering-lists

import React from 'react'
import { useSelector } from "react-redux";

function FoodMenuList() {
  const menulist = useSelector((state) => state.menus.allMenus);
  console.log(menulist)
  const listItems = menulist.map(item =>
    <li key={item.id}> {item.menu} </li>
    );

  return (
    <div className='menulist-container'>
      FoodMenuList
      <ul>
        {listItems}
      </ul>
    </div>
  )
}

export default FoodMenuList