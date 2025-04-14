import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CalrorieCard from './CalorieCard';

function ListCard() {
  const saved_menu_list = useSelector((state) => state.menus.savedMenuList);

  // return (
  //   <div className="flex flex-col items-center gap-3">
  //     {
  //       saved_menu_list.map((item) => (
  //         <li 
  //         key={item._id}>

  //           <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-96 p-6 items-center p-4">
  //             <div className="flex items-center mb-4 gap-5">
  //               <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#32cd32"><path d="M0 0h24v24H0z" fill="none"/><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/></svg>
  //               <h5 className="ml-3 pl-2 text-slate-800 text-md font-semibold"> Date {item.date} </h5>
  //               <button className="rounded-full w-14 h-6 bg-red-500 text-white text-xs" onClick={removeCalCheck(item)}> DELETE </button>
  //             </div>
              
  //             <p className="block text-slate-600 leading-normal font-light mb-4">
  //               Calories: {item.calories?.calories.toFixed(1)} kcal
  //             </p>
  //             <div className="block text-slate-600 leading-normal font-light mb-4">
  //               {
  //                 item.menu.map((menu) => (
  //                   <div key={menu.nutrition_id}>
  //                     <p>{menu.menu_name} - {menu.quantity} g</p>
  //                   </div>
  //                 ))
  //               }
  //             </div>
  //           </div>

  //         </li>
  //       ))
  //     }
  // </div>
  // );

  return (
  <div className="mx-auto text-slate-950">
    <div className="flex flex-row justify-center gap-4 mx-auto p-4">
      <div className="">
        <div className="relative flex flex-col mx-auto gap-4 flex-wrap list-none p-4">
          {saved_menu_list.map((item) => (
            <div key={item._id}>
              <CalrorieCard item={item} />
            </div>
          ))}
          </div>
      </div>
    </div>
  </div>
  )
}

export default ListCard