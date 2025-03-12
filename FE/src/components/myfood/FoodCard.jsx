// FILE: FoodCard.jsx
// PROJECT: Advanced Web Frameworks - Group2
// PROGRAMMER: Yujung Park
// FIRST VERSION: 2025-03-09
// DESCRIPTION:
// References: https://www.material-tailwind.com/docs/html/card
import React from 'react'

function FoodCard() {
  return (
    <div className="menu-card flex flex-row my-6 bg-white shadow-sm rounded-sm">
      <div class="menucard-container flex flex-row">
        <div className="relative m-2.5 overflow-hidden text-white rounded-md">
        {/* <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=100&amp;&amp;q=80" alt="card-image" /> */}
        </div>
        <div className="">
        <div className="p-4 float-left">
          <h6 className="mb-2 text-slate-800 text-lg font-semibold">
            Nutrition
          </h6>
          <p className="text-slate-600 leading-normal font-light">
            nutrition...
          </p>
        </div>
        <div className="p-4 float-right">
          <button className="rounded-md py-2 px-4 text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>  
  )
}

export default FoodCard