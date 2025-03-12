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
    <div className="foodinput-container">
        <form action={submitFoodData} className="menuinput-form">
          <div className="menu-input py-2">
            <label htmlFor='menu' className="pr-3 mt-5 mb-5 text-gray-950 select-none">Menu item</label>
            <input type="text" required minLength="3"
              className="py-2 pr-3 pl-3 text-gray-900 border border-gray-400 rounded-md"
              value={menuitem} 
              onChange={e => setMenuitem(e.target.value)} />            
          </div>
          <div className="qty-input py-2 mt-5 mb-5">
            <label htmlFor='menuqty' className="pr-3 pt-5 mt-5 mb-5 text-gray-950 select-none">Quantity</label>
            <input
              className="py-2 pr-3 pl-3 text-gray-900 border border-gray-400 rounded-md"
              value={itemqty}
              onChange={e => setItemqty(e.target.value)}
              type="number"
            />
          </div>
          <div className="content-center py-2">
          <button type="submit" className="w-24 text-white" >
            Add
          </button>
          </div>
        </form>
      
    </div>
  )
}

export default FoodInput