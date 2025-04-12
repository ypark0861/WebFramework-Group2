// FILE: FoodCard.jsx
// PROJECT: Advanced Web Frameworks - Group2
// PROGRAMMER: Yujung Park
// FIRST VERSION: 2025-03-07
// DESCRIPTION: 
// REFERENCE: https://react.dev/learn/rendering-lists

import React from 'react'
import { useSelector } from "react-redux";
import FoodCard from './FoodCard';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

function FoodMenuList() {
  const menulist = useSelector((state) => state.menus.allMenus);
  console.log(menulist)
  const listItems = menulist.map(item =>
    <li key={item.id}> 
    {/* {item.menu}  */}
    <FoodCard item={item} />
    </li>
    );

  return (
    <div>
      <div className="mx-auto text-slate-950">
        <h2 className="text-xl font-bold text-teal-500 pt-4">MY MENU LIST</h2>
        <div className="">
          <ul className="relative flex flex-row mx-auto gap-4 flex-wrap list-none p-4">
            {listItems}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FoodMenuList