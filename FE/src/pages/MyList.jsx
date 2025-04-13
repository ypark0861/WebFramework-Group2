// FILE: MyFood.jsx
// PROJECT: Advanced Web Frameworks - Group2
// PROGRAMMER: Yujung Park
// FIRST VERSION: 2025-04-11
// DESCRIPTION: 
// REFERENCES: https://blog.logrocket.com/modern-api-data-fetching-methods-react/
// https://www.material-tailwind.com/docs/html/card#


import{ React, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addSavedMenuList } from '../reducers/menuSlice';
import ListCard from '../components/mylist/ListCard';

const MyList = () => {
  const dispatch = useDispatch();
  const user_email = 'ypark@test.com'; //test
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFoodList = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/hfood/calcheckbyuser/${user_email}`
        );
        if (!response.ok) {
          throw new Error(`ERROR: ${response.status}`);
        }
        let response_data = await response.json();
        setData(response_data);
        console.log(data);
        // dispatch(addSavedMenuList(data));
        dispatch(addSavedMenuList(response_data));
        
      } catch (e) {
        console.error(e.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    getFoodList();

  }, []);
  
  
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl text-slate-800 p-4">MY LIST</h1>
      {loading && (
        <h2 className="text-slate-800 p-4">Loading...</h2>
      )}
      <ListCard />
    </div>
  )
}
export default MyList