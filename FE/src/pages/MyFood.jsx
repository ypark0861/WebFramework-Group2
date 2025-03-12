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

const MyFood = () => {
  return (
    <div className="myfood-container">
      <h1 className="text-4xl text-slate-950">My Food Checker</h1>
      <div className="myfood-grid-contianer text-slate-950">
        <FoodInput />
        <FoodMenuList />
        {/* <Counter /> */}
      </div>
    </div>
  )
}

export default MyFood