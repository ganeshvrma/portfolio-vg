import React from 'react'
import {FaHtml5,FaCss3,FaJs,FaReact,FaJava} from "react-icons/fa";
//import {SiRadis} from "react-icons/si";

const Skills = () => {
  return (
    <div id='Skills' className='p-10 md:p-24'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Skills</h1>
        <div className=' flex flex-wrap items-center justify-around'>
            <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10 '>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaHtml5 color='#E34F26'size={50}/>
            </span>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaCss3 color='#1572b6'size={50}/>
            </span><span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaJs color='#61DAF8'size={50}/>
            </span><span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaReact color='#E34F26'size={50}/>
            </span>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaJava color='#E34F26'size={50}/>
            </span>
            {/* <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <SiRadis color='#E34F26'size={50}/>
            </span> */}
            </div>
            <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'></div>
        </div>
    </div>
  );
};

export default Skills