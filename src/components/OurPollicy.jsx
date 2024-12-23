import React from 'react'
import { assets } from '../assets/assets'

const OurPollicy = () => {
  return (
    <div className='flex flex-col sm:flex-row mx-auto gap-12 sm:gap-2 text-center py-3 justify-around sm:mt-10'>
      <div>
        <img className='w-15 m-auto mb-5' src={assets.exchange_icon} alt="" />
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>we offer hasle free exchange police</p>
      </div>
      <div>
        <img className='w-15 m-auto mb-5' src={assets.quality_icon} alt="" />
        <p className='font-semibold'>7 Days Return Policy</p>
        <p className='text-gray-400'>we provide 7 days free return police</p>
      </div>
      <div>
        <img className='w-15 m-auto mb-5' src={assets.support_img} alt="" />
        <p className='font-semibold'>Best Customer Support</p>
        <p className='text-gray-400'>we Provide 24/7 Customer Support</p>
      </div>
    </div>
  )
}

export default OurPollicy
