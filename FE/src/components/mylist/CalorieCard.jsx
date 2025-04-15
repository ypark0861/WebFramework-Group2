import React from 'react'
import{ useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addSavedMenuList } from '../../reducers/menuSlice';

function CalorieCard(props) {
  const dispatch = useDispatch();
  const theuser = useSelector((state) => state.users.user);
  const user_email = theuser;
  const [loading, setLoading] = useState(true);
  

  const removeCalCheck = () => {
    console.log(props.item._id); //_id
    fetch(`${import.meta.env.VITE_API_URI}deletecalcheck/${props.item._id}`, { method: 'DELETE' })
    .then(response => {
      if (response.status !== 200) {
        throw new Error('ERROR-deleting calrorie check card')
      }
    })
    .catch(error => console.error(error.message)); 
  }
  
  const getFoodList = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URI}calcheckbyuser/${user_email}`
      );
      if (!response.ok) {
        throw new Error(`ERROR: ${response.status}`);
      }
      let response_data = await response.json();
      dispatch(addSavedMenuList(response_data));
    } catch (e) {
      console.error(e.message);
    } finally {
      setLoading(false);
    }
  }
  getFoodList();


  return (
    <div className="relative gap-4 my-6 pa-4">
      {loading && (
        <h2 className="text-slate-800 p-4">Loading...</h2>
      )}
      
      <li key={props.item._id}
      className="relative gap-4 my-6 pa-4">
            <div className="flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 p-6">
              <div className="relative flex flex-row gap-4 items-center mb-4 justify-center">
                <svg className="" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#32cd32"><path d="M0 0h24v24H0z" fill="none"/><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/></svg>
                <h5 className="ml-3 text-slate-800 text-md font-semibold"> Date {props.item.date} </h5>
                <button className="rounded-full w-14 h-6 bg-red-500 text-white text-xs" onClick={removeCalCheck}> remove </button>
              </div>
              
              <p className="block text-slate-600 leading-normal font-light mb-4">
                Calories: {props.item.calories?.calories.toFixed(1)} kcal
              </p>
              <div className="block text-slate-600 leading-normal font-light mb-4">
                {
                  props.item.menu.map((menu) => (
                    <div key={menu.nutrition_id}>
                      <p>{menu.menu_name} - {menu.quantity} g</p>
                    </div>
                  ))
                }
              </div>
            </div>

          </li>
  </div>
  )
}

export default CalorieCard
