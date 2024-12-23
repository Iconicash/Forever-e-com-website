import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-10 my-10 mt-40 text-sm'>
                <div>
                    <img className='mb-5 w-32 ' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 '>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero atque corrupti vel aut quaerat laboriosam quisquam maxime, quos officiis dicta blanditiis
                    </p>
                </div>

                <div>
                    <p className='mb-5 text-xl font-medium'>COMPANY</p>
                    <ul className='flex flex-col text-gray-600 gap-1'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivary</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div>
                    <p className='mb-5 text-xl font-medium'>GET IN TOUCH</p>
                    <ul className='flex flex-col text-gray-600 gap-1'>
                        <li>+91 5945564726</li>
                        <li>forever@gamil.com</li>
                    </ul>
                </div>


            </div>
            <div>
                <hr />
                <p className='text-center py-5 text-sm'>Copyright 2024@ forever.com - All Right Reserved.</p>
            </div>
        </div>

    )
}

export default Footer
