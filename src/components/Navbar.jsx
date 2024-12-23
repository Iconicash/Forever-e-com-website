import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {

        const [ visible , setVisible]=useState(false);

        const {setShowSearch , getCount} = useContext(ShopContext);

  return (
    <div className='px-8 py-3 flex justify-between items-center font-medium' >
        <Link to={'/'}> <img src={assets.logo} className='w-36' alt="" />
        </Link>
      <ul className='hidden sm:flex text-md text-gray-700  font-medium gap-5'> 
        <NavLink className='flex flex-col gap-1 items-center ' to='/'>
         <p>Home</p>
          <hr className='bg-gray-700 w-2/4 h-[1.5px] border-none hidden  ' />
        </NavLink>
        
        <NavLink className='flex flex-col  gap-1 items-center  ' to='/collection'>
          <p>collection</p>
          <hr className='bg-gray-700 w-2/4 h-[1.5px] border-none hidden' />
        </NavLink>

        <NavLink className='flex flex-col items-center gap-1 ' to='/about'>
          <p>About</p>
          <hr className='bg-gray-700 w-2/4 h-[1.5px] border-none hidden ' />
        </NavLink>

        <NavLink className='flex flex-col items-center gap-1 ' to='/contact'>
          <p>Contact</p>
          <hr className='bg-gray-700 w-2/4 h-[1.5px] border-none hidden ' />
        </NavLink>
      </ul>
      
      <div className='flex items-center gap-5'>
            <img onClick={()=>setShowSearch(true)} className='w-5 cursor-pointer' src={assets.search_icon} alt="" />
           
           <div className='group relative'>
                  <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
                  <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 '>
                        <div className=' flax flex-col bg-slate-50 text-gray-500 w-36 py-3 px-5 gap-2'>
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p className='cursor-pointer hover:text-black'>Login</p>
                            <p className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                  </div>
           </div>
           <Link to='/cart' className='relative'>
              <img className='w-5 min-w-5' src={assets.cart_icon} alt="" />
              <p className='p-[1px] absolute right-[-5px] bottom-[-5px] text-center leading-4 text-white bg-black aspect-square rounded-full text-[16px]'>{getCount()}</p>
           </Link>
          <img onClick={()=>setVisible(true)}  className='w-5 cursor-pointer sm:hidden' src={assets.menu_icon} alt="" />
            
        {/* Sidebar menu for small screen */}
        <div className={` absolute top-0 right-0 bottom-0 overflow-hidden  bg-white  transition-all ${visible ? 'w-full':'w-0'}`}>
          <div className=' flex flex-col '>
          <div onClick={()=>setVisible(false)} className='flex  item-center gap-4 p-3' >
                <img className='h-4 mt-1 rotate-180' src={assets.dropdown_icon} alt="" />
                <p>Back</p>
           </div>

           
            <Link to='/' onClick={()=>setVisible(false)} className='border py-2 pl-6'>HOME</Link>
            <Link to='/collection' onClick={()=>setVisible(false)} className='border py-2 pl-6'>COLLECTION</Link>
            <Link to='/contact' onClick={()=>setVisible(false)} className='border py-2 pl-6'>CONTACT</Link>
            <Link to='/about' onClick={()=>setVisible(false)} className='border py-2 pl-6'>ABOUT</Link>
            
          </div>
           
        </div>
      </div>


    </div>

    
  )
}

export default Navbar
