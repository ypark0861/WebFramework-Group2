// FILE: FoodCard.jsx
// PROJECT: Advanced Web Frameworks - Group2
// PROGRAMMER: Yujung Park
// FIRST VERSION: 2025-04-11
// DESCRIPTION: 

import React from 'react'
import { useSelector } from "react-redux";

function FoodMenuList() {
  const food_nutrition = useSelector((state) => state.menus.allNutrition);
  console.log(food_nutrition)

  return (
    <div>
      <div className="mx-auto text-slate-950">
        <h2 className="text-xl font-bold text-teal-500 pt-4">TOTAL CALORIES: {food_nutrition?.calories.toFixed(1)}</h2>
      </div>
    </div>
  )
}

export default FoodMenuList