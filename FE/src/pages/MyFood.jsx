// https://react.dev/reference/react-dom/components/input

import{ useState, React } from 'react'
import Button from 'react-bootstrap/Button';
import Counter from '../features/counter/Counter'
import FoodCard from '../components/FoodCard';

const MyFood = () => {
  const [menuitem, setMenuitem] = useState('');
  const [itemqty, setItemqty] = useState('0');
  const qtyAsNumber = Number(itemqty);
  
  function getFoodData() {
    // send api request
    // store response and item and qty to the store
    

  }

  return (
    <div className="text-slate-950">
      <h1>My Food Checker</h1>
        <form action={getFoodData}>
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
        
        <h1 className="menu-list">Menu List</h1>
        <ul>
          <li>1</li>
          <button>Delete</button>
        </ul>
        <Counter />
        <FoodCard />
    </div>
  )
}

export default MyFood