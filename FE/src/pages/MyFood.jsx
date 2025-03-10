// FILE: MyFood.jsx
// PROJECT: Advanced Web Frameworks - Group2
// PROGRAMMER: Yujung Park
// FIRST VERSION: 2025-03-05
// DESCRIPTION: 
// REFERENCES: https://react.dev/reference/react-dom/components/input
// https://thepriyammondal.medium.com/simplifying-state-management-with-redux-toolkit-a-comprehensive-guide-8cc3ef72a13

import{ React } from 'react'
// import { Counter } from '../reducers/Counter'
import FoodInput from '../components/myfood/FoodInput';
import FoodMenuList from '../components/myfood/FoodMenuList';
// import FoodCard from '../components/myfood/FoodCard';

const MyFood = () => {
  return (
    <div className="myfood-container">
      <div className="text-slate-950">
        <FoodInput />
        <FoodMenuList />
        {/* <Counter /> */}
        {/* <FoodCard /> */}
      </div>
    </div>
  )
}

export default MyFood