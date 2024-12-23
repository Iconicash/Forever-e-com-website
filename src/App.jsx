import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import Cart from './page/Cart'
import Collection from './page/Collection'
import Contact from './page/Contact'
import Login from './page/Login'
import Order from './page/Order'
import PlaceOrder from './page/PlaceOrder'
import Product from './page/Product'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Search from './components/Search'
import { ToastContainer, toast } from 'react-toastify';



const App = () => {
  
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <ToastContainer/>
        <Navbar/>
        <Search/>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/collection' element={<Collection/> } />
        <Route path='/contact' element={<Contact/> } />
        <Route path='/login' element={<Login/> } />
        <Route path='/order' element={<Order/> } />
        <Route path='/place-order' element={<PlaceOrder/> } />
        <Route path='/product/:productId' element={<Product/> } />

        </Routes>

        <Footer/>

    </div>
  )
}

export default App
