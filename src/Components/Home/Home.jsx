import React from 'react'
import image from "../../assets/WhatsApp Image 2025-01-21 at 22.13.32_b902556e.jpg"
import Textchange from '../../Textchange';
const Home = ()=> {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
      <div  className='md:w-2/4 md:pt-10'>
      <h1  className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter  '>GANESH VERMA</h1>
      <p className='text-sm md:text-2xl tracking-tight'>
       <Textchange/>
      </p>
      <button className='mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]  mr-4'>
        Contact me
      </button>
      <button className='mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
        Resume
      </button>
      </div>
      <div>
      <img className='w-full  rounded-full object-cover ' src= {image} alt="image" />
      </div>
    </div>
  )
};

export default Home;