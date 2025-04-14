// FILE: MyFood.jsx
// PROJECT: Advanced Web Frameworks - Group2
// PROGRAMMER: Yujung Park
// FIRST VERSION: 2025-03-05
// DESCRIPTION: 
// REFERENCES: https://react.dev/reference/react-dom/components/input
// https://thepriyammondal.medium.com/simplifying-state-management-with-redux-toolkit-a-comprehensive-guide-8cc3ef72a13

import{ React } from 'react'
import FoodInput from '../components/myfood/FoodInput';
import FoodMenuList from '../components/myfood/FoodMenuList';
import FoodCalrorie from '../components/myfood/FoodCalorie';
import { useDispatch, useSelector } from 'react-redux'

const MyFood = () => {
    const dispatch = useDispatch();
    const theuser = useSelector((state) => state.users.user)

    console.log(theuser);

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl text-slate-800 p-4">MY FOOD CHECKER</h1>
      <h2 className="text-2md text-slate-800 p-4">Hello {theuser}</h2>
      <div className="bg-gray-100 p-4 mt-5 mb-5">
        <FoodInput /> 
        <FoodCalrorie />
        <FoodMenuList />
      </div>
    </div>
  )
}
export default MyFood