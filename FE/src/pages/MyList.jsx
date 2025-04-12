// FILE: MyFood.jsx
// PROJECT: Advanced Web Frameworks - Group2
// PROGRAMMER: Yujung Park
// FIRST VERSION: 2025-04-11
// DESCRIPTION: 
// REFERENCES:

import{ React } from 'react'
import FoodInput from '../components/myfood/FoodInput';
import FoodMenuList from '../components/myfood/FoodMenuList';
import FoodCalrorie from '../components/myfood/FoodCalorie';


const MyList = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl text-slate-800 p-4">MY LIST</h1>
      <div className="bg-gray-100 p-4 mt-5 mb-5">
      </div>
    </div>
  )
}
export default MyList