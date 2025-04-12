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
  const label_menu ='Menu item';
  const label_qty = 'Grams';
  
  const submitFoodData = () => {
    fetch(`http://localhost:8080/hfood/food_nutrition/${menuitem}`) 
    .then(response => {
      if (response.status !== 200) {
        throw new Error('Food not found in API')
      } else {
        response.json()
        .then(data => {
          console.log(typeof data);
          dispatch(
            addMenu({
              id: new Date().getTime(),
              menu: menuitem,
              quantity: qtyAsNumber,
              nutrition: data,
            })
          );
      })
      }
    }
    )
    .catch(error => console.error(error.message)); 
   
    // dispatch(
    //   addMenu({
    //     id: new Date().getTime(),
    //     menu: menuitem,
    //     quanty: qtyAsNumber,
    //   })
    // );

    console.log(data)
  }
  return (
  <div  className="justify-center">
    <form action={submitFoodData} className="flex flex-row gap-4">
      <div className="flex flex-row">
        <label htmlFor='menu' className="py-2 pr-3 pl-3 text-gray-950 select-none">{label_menu}</label>
        <input type="text" required minLength="3"
        className="py-2 pr-3 pl-3 text-gray-900 border border-gray-400 rounded-md"
        value={menuitem} 
        onChange={e => setMenuitem(e.target.value)} />
      </div>
      <div className="flex flex-row">
        <label htmlFor='menuqty' className="py-2 pr-3 pl-3 text-gray-950 select-none">{label_qty}</label>
        <input
        className="py-2 pr-3 pl-3 text-gray-900 border border-gray-400 rounded-md"
        value={itemqty}
        onChange={e => setItemqty(e.target.value)}
        type="number"
        />
      </div>
      <div className="content-center pr-3 mt-4 mb-4 text-gray-950 select-none">
        <button type="submit" className="rounded-lg w-24 h-12 bg-teal-500 text-white" > Add </button>
      </div>
    </form>
  </div>
  )
}

export default FoodInput