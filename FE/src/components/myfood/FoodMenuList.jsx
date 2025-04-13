// FILE: FoodCard.jsx
// PROJECT: Advanced Web Frameworks - Group2
// PROGRAMMER: Yujung Park
// FIRST VERSION: 2025-03-07
// DESCRIPTION: 
// REFERENCE: https://react.dev/learn/rendering-lists

import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import FoodCard from './FoodCard';
import { deleteAllMenu } from '../../reducers/menuSlice'

function FoodMenuList() {
  const url = 'http://localhost:8080/hfood';
  const dispatch = useDispatch();
  const menulist = useSelector((state) => state.menus.allMenus);
  // console.log(menulist)
  // const listItems = menulist.map(item =>
  // <li key={item.id}> 
  // <FoodCard item={item} />
  // </li>
  // );

  const saveFoodList = () => {
    console.log("save food list");
    const menu_array = [];
    // user email, caloriechedckingeventid/timestamp, menu, quantity, netritionobject_id 
    // curl --location 'http://localhost:8080/hfood/newcalcheck' \
    // --header 'Content-Type: application/json' \
    // --data-raw '{
    //     "user emal":"ypark@test.com",
    //     "calcheck_id": "170005213",
    //     "menus": [{
    //         "nutrition_id": "nutri",
    //         "menu_name": "menu_name",
    //         "quantity": "qty"
    //     }]
    // }'
    const menu_array_builder = menulist.map(item => {
      console.log(item);
      menu_array.push({
        nutrition_id: item.nutrition._id,
        menu_name: item.menu,
        quantity: item.quantity,
      });
    });

    const query = {
      "user_email":"ypark@test.com",
      "menus":menu_array
    }

    fetch(`${url}/newcalcheck`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(query)
    })
    .then(response => {
      if (response.status === 200) {
        dispatch(deleteAllMenu());
        alert("Your food list is saved");
      } else {
        console.log(`ERROR-newcalcheck ${response.status}`)
      }
    })
  }

  return (
    <div>
      <div className="mx-auto text-slate-950">
        <div className="flex flex-row justify-center gap-4 mx-auto p-4">
        <h2 className="text-xl font-bold text-teal-500">MY MENU LIST</h2>
        <button className="rounded-lg w-24 h-10 bg-teal-500 text-white" onClick={saveFoodList}> Save </button>
        </div>
        <div className="">
          <ul className="relative flex flex-row mx-auto gap-4 flex-wrap list-none p-4">
            {menulist.map((item) => (
              <li key={item.id}> 
              <FoodCard item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FoodMenuList