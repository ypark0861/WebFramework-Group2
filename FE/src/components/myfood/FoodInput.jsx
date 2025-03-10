// FILE: FoodCard.jsx
// PROJECT: Advanced Web Frameworks - Group2
// PROGRAMMER: Yujung Park
// FIRST VERSION: 2025-03-10
// DESCRIPTION:

import{ useState, React } from 'react';
// import { store } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { addMenu } from '../../reducers/menuSlice'

export const FoodInput = () => {
  const dispatch = useDispatch();
  const [menuitem, setMenuitem] = useState('');
  const [itemqty, setItemqty] = useState('0');
  const qtyAsNumber = Number(itemqty);
  const data = useSelector((state) => state.menus.allMenus);
  
  const submitFoodData = (e) => {
    dispatch(
      addMenu({
        id: new Date().getTime(),
        menu: menuitem,
        quanty: qtyAsNumber,
      })
    );

    console.log(data)
  }
  return (
    <div>
      <h1>My Food Checker</h1>
        <form action={submitFoodData}>
          <div className="food-input">
            <label htmlFor='menu' className="block text-sm/6 font-medium">Menu item:
              <div className="flex items-center rounded-md bg-white pl-3 ">
                <input 
                value={menuitem}
                onChange={e => setMenuitem(e.target.value)}
                />
              </div>
            </label>
            <label> Quantity:
              <input
                value={itemqty}
                onChange={e => setItemqty(e.target.value)}
                type="number"
              />
            </label>
          </div>
          <button type="submit">
                Add
          </button>
        </form>
      
    </div>
  )
}

export default FoodInput