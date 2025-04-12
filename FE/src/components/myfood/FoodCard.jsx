// FILE: FoodCard.jsx
// PROJECT: Advanced Web Frameworks - Group2
// PROGRAMMER: Yujung Park
// FIRST VERSION: 2025-03-09
// DESCRIPTION:
// References: https://www.material-tailwind.com/docs/html/card
import React from 'react';
import { useDispatch } from 'react-redux'
import { deleteMenu } from '../../reducers/menuSlice'

function FoodCard(props) {
  const dispatch = useDispatch();
  // console.log(props);

  const removeFoodItem = () => {
    dispatch(deleteMenu(props.item));
  }

  return (
      <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-72 md:w-96 lg:w-96 xl:w-96 mx-auto">
        <div className="mb-8">
        <div className="relative text-gray-900 font-bold text-xl py-3">{props.item.menu.toUpperCase()}</div>
        <button type="submit" className="rounded-full w-14 h-6 bg-red-500 text-white text-xs" onClick={removeFoodItem}> DELETE </button>
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <th className="px-4 py-2"> </th>
              <th className="px-4 py-2"> </th>
              <th className="px-4 py-2"> </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <td className="px-4 py-2">Calories</td>
              <td className="px-4 py-2">{props.item.nutrition?.calories}</td>
              <td className="px-4 py-2">kcal</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Carbohydrates</td>
              <td className="px-4 py-2">{props.item.nutrition?.carbohydrates_total_g}</td>
              <td className="px-4 py-2">g</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="px-4 py-2">Cholesterol</td>
              <td className="px-4 py-2">{props.item.nutrition?.cholesterol_mg}</td>
              <td className="px-4 py-2">mg</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Fat</td>
              <td className="px-4 py-2">{props.item.nutrition?.fat_total_g}</td>
              <td className="px-4 py-2">g</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="px-4 py-2">Fiber</td>
              <td className="px-4 py-2">{props.item.nutrition?.fiber_g}</td>
              <td className="px-4 py-2">g</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Protein</td>
              <td className="px-4 py-2">{props.item.nutrition?.protein_g}</td>
              <td className="px-4 py-2">g</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="px-4 py-2">Sodium</td>
              <td className="px-4 py-2">{props.item.nutrition?.sodium_mg}</td>
              <td className="px-4 py-2">mg</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Sugar</td>
              <td className="px-4 py-2">{props.item.nutrition?.sugar_g}</td>
              <td className="px-4 py-2">g</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
  );
}

export default FoodCard