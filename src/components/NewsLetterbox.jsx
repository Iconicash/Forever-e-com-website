import React from 'react'

const NewsLetterbox = () => {
  const onsubmitHandler = (event) => {
      event.preventDefault();
  }

  return (
    <div className='text-center my-10'>
      <p className='text-gray-800 text-2xl font-medium'>Subcribe now to get 20% off</p>
      <p className='mt-3 text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem veritatis consequatur dolore perspiciatis.</p>

      <form onSubmit={onsubmitHandler} className='w-full sm:w-1/2 border flex items-center mx-auto gap-3 my-6 pl-3 '>
        <input className='w-full outline-none sm:flex-1 ' type="email" placeholder='Enter Your Email' required  />
        <button className='bg-black text-white px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsLetterbox
