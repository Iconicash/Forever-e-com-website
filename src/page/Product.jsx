import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets';

const Product = () => {
const {productId} = useParams();
const {products,addToCart} = useContext(ShopContext);
const [productdata , setProductdata]=useState(false);
const [img,setImg]=useState('');
const [sizes , setSizes]=useState('')

      const fetchproductdata = async ()=>{

          products.map((item)=>{
            if (item._id === productId) {
              setProductdata(item)
              setImg(item.image[0])
              // console.log(item);
              return null;
            }
          })
      }

      useEffect(()=>{
        fetchproductdata();
      },[productId])

  return productdata ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 '>
      {/* ------------Product Data---------- */}
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

          {/* ------------Product Image--------- */}
          <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
            <div className='flex sm:flex-col overflow-x-auto no-scrollbar sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[19.7%] w-full  '>
            {
              productdata.image.map((item,index)=>(
                <img src={item} key={index} onClick={()=>setImg(item)} className='w-[24%] sm:w-full cursor-pointer mb-3' />
              ))
            }

            </div>

            <div className='w-full sm:w-[80%]  '>
                  <img className='w-full h-auto' src={img} alt="" />
            </div>
          </div>
            {/* ----------------Product Info----------- */}
              <div className='flex-1 '>
                <h1 className='font-normal text-2xl '>{productdata.name}</h1>
                <div className='flex items-center gap-1 mt-2 '>
                  <img src={assets.star_icon} alt="" />
                  <img src={assets.star_icon} alt="" />
                  <img src={assets.star_icon} alt="" />
                  <img src={assets.star_icon} alt="" />
                  <img src={assets.star_dull_icon} alt="" />
                  <p className='font-normal ml-1'>(200)</p>
                </div>
               
                  <p className='mt-5 text-3xl font-medium'>₹  {productdata.price}</p>
                  <p className='mt-5 text-gray-500 md:w-4/5'>  {productdata.description}</p>
                
              <div className='mt-5'>
                  <p className='text-gray-700 text-2xl'>Select Size</p>
                  {
                    productdata.sizes.map((item, index)=>(
                      <button onClick={()=>setSizes(item)} className={`py-2 px-4 border mr-3 mt-3 text-center bg-slate-100 ' ${item === sizes ? 'border-orange-600' : '' }`} key={index}>{item}</button>
                    ))
                  }
              </div>
                  <button onClick={()=>addToCart(productdata._id,sizes) } className='bg-black text-white active:bg-gray-600 py-3 px-8 mt-5'>ADD TO CART</button>
              </div>
        </div>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
