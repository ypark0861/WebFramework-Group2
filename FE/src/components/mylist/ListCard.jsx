import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function ListCard() {
  const saved_menu_list = useSelector((state) => state.menus.savedMenuList);
  const removeFoodItem = () => {
    
  }

  return (
    <div className="flex flex-col items-center">
      {
        saved_menu_list.map((item) => (
          <li 
          key={item._id}>

            <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 p-6">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#646cff"><path d="M0 0h24v24H0z" fill="none"/><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/></svg>
                <h5 className="ml-3 pl-2 text-slate-800 text-md font-semibold"> Date {item.date} </h5>
              </div>
              <p className="block text-slate-600 leading-normal font-light mb-4">
                Calories: 
              </p>
              <div className="block text-slate-600 leading-normal font-light mb-4">
                {
                  item.menu.map((menu) => (
                    <div key={menu.nutrition_id}>
                      <p>{menu.menu_name} - {menu.quantity}g</p>
                    </div>
                  ))
                }
              </div>
            </div>

          </li>
        ))
      }
  </div>
  );
}

export default ListCard