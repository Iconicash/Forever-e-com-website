import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';
import Title from './Title';

const BestDeal = () => {
     
            const {products} = useContext(ShopContext);
            
            const [bestProduct , setbestProduct] = useState([]);

            useEffect(()=>{
                const bestsell = products.filter((item)=> (item.bestseller));
                setbestProduct(bestsell.slice(0,5))
            },[])
            
  return (
      <div className=''>
        <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={"SELLERS"}/>
        <p className='w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel a illo sed Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    bestProduct.map((item , index)=>(
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} curruncy={item.currency} price={item.price}/>
                    ))
                }
        </div>
    </div>
  )
}

export default BestDeal
