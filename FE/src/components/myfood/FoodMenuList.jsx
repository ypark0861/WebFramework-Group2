// FILE: FoodCard.jsx
// PROJECT: Advanced Web Frameworks - Group2
// PROGRAMMER: Yujung Park
// FIRST VERSION: 2025-03-07
// DESCRIPTION: 
// REFERENCE: https://react.dev/learn/rendering-lists

import React from 'react'
import { useSelector } from "react-redux";
import FoodCard from './FoodCard';

function FoodMenuList() {
  const menulist = useSelector((state) => state.menus.allMenus);
  console.log(menulist)
  const listItems = menulist.map(item =>
    <li key={item.id}> 
    {item.menu} 
    <FoodCard />
    </li>
    );

  return (
    <div className='menulist-container'>
      <h2>My Menu List</h2>
      <ul className="menulist-list py-5 pr-3 pl-3 text-gray-900 rounded-md">
        {listItems}

      </ul>
    </div>
  )
}

export default FoodMenuList