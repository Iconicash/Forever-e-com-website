import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom';

const Search = () => {
  const  {search , setSearch , showsearch , setShowSearch} = useContext(ShopContext);
  const  [display, setDisplay] = useState(false)
  const  location = useLocation();

    useEffect(()=>{
        // console.log(location.pathname);
        if (location.pathname.includes('collection')) {
          setDisplay(true);
        } else {
          setDisplay(false)
        }
        
    }, [location])
    
    
  return showsearch && display ? (
    <div className=' border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex item-center justify-center border border-gray-400 px-5 py-2 rounded-full my-5 mx-3 mx- w-3/4 sm:w-1/2 '>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit  ' type="text" placeholder='Search' /> 
            <img className='w-4 h-5 text-xl' src={assets.search_icon} alt="" />
        </div>
        <img onClick={()=>setShowSearch(false)} className='inline-flex w-4 cursor-pointer' src={assets.cross_icon} alt="" />
    </div>
  ) : null
}

export default Search
