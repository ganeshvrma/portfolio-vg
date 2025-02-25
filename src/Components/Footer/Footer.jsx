import React from 'react'
import {MdOutlineEmail, MdPhone, MdWhatsapp} from "react-icons/md";
import {CiLinkedin} from "react-icons/ci";
import { FaGithub } from 'react-icons/fa';
const Footer = () => {
  return (
    <div id='Footer' className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center'>
        <div>
            <h1  className='text-2xl md:text-6xl font-bold '>Contact </h1>
            <h3 className='text-sm md:text-2xl font-normal'>Feel free to reach </h3>
        </div>
        <ul className='text-sm md:text-xl '>
            <li className='flex gap-1 items-center'><MdOutlineEmail size={20}/>
            gs30081999@gmail.com</li>
            <li className='flex gap-1 items-center'><MdPhone size={20}/>
                <MdWhatsapp size={20}/>
            +91 8053633196</li>
            <li className='flex gap-1 items-center'><CiLinkedin size={20}/>
            www.linkedin.com/in/ganesh-verma-807250211</li>
            <li className='flex gap-1 items-center'><FaGithub size={20}/>
            github.com/ganeshvrma</li>
        </ul>
    </div>
  )
}

export default Footer;