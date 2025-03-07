import{ useState, React } from 'react'
import Button from 'react-bootstrap/Button';

const MyFood = () => {
  useState()

  return (
    <div className="text-slate-950">
      <h1>My Food Checker</h1>
        <form>
          <div>
            <label htmlFor='menu' className="block text-sm/6 font-medium">Select a Menu:</label>
            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
              <input type="text" placeholder="salad" id="menu" />
            </div>
          </div>
          <Button type="submit">Button</Button>
        </form>
        
        <h1 className="menu-list">Menu List</h1>
        <ul>
          <li>1</li>
          <button>Delete</button>
        </ul>
    </div>
  )
}

export default MyFood