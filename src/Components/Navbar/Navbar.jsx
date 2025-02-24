//  import React,{useState} from 'react';
//  import { RiCloseLine, RiMenu2Line  } from "@remixicon/react";
//  const Navbar = () => {
//   const [menu,openMenu]=useState(false);
//   const [showMenu,setShowmenu]=useState(true);
//    return (
//      <nav className='flex flex-wrap  justify-between md:items-center text-white px-10 pt-6 md:px-20 '>
//         <span className='text-xl font-bold tracking-wide'>Portfolio </span>
//         <ul className={` ${ menu ? "block":"hidden"} mx-24 mt-4 py-2 font-semibold md:mt-5 bg-black px-2 bg-opacity-30  rounded-xl md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
//           <li className='text-md transition-all duration-300 p-1 md:p-0'><a href="#About">About</a></li>  
//            <li className='text-md transition-all duration-300 p-1 md:p-0'><a href="#Skills">Skills</a> </li>
//            <li className='text-md transition-all duration-300 p-1 md:p-0'><a href="#Projects">Projects</a> </li>
//             <li className='text-md transition-all duration-300 p-1 md:p-0'><a href="#Contact">Contact</a></li>
//         </ul>
//        { showMenu ?(
//         <RiMenu2Line size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300 "/>
//        ):(<RiCloseLine size={30} className='md:hidden absolute right-10 top-6 transition-all duration-300 '/>)
//       }
//      </nav>
//    );
//  }
//  export default Navbar;
import React, { useState } from "react";

import { RiCloseLine, RiMenu2Line } from "@remixicon/react"; // Correct import

const Navbar = () => {
  const [menu, setMenu] = useState(false); // Toggle menu state

  return (
    <nav className="mt-4 flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
      <span className="text-xl font-bold tracking-wide">Ganesh</span>

      {/* Navigation Menu */}
      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 mt-4 py-2 font-semibold md:mt-5 bg-black px-2 bg-opacity-30 rounded-xl md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <li className="text-md transition-all duration-300 p-1 md:p-0">
          <a href="#About">About</a>
        </li>
        <li className="text-md transition-all duration-300 p-1 md:p-0">
          <a href="#Skills">Skills</a>
        </li>
        <li className="text-md transition-all duration-300 p-1 md:p-0">
          <a href="#Project">Projects</a>
        </li>
        <li className="text-md transition-all duration-300 p-1 md:p-0">
          <a href="#Footer">Contact</a>
        </li>
      </ul>

      {/* Menu Toggle Button */}
      <button
        className="md:hidden absolute right-10 top-6 transition-all duration-300"
        onClick={() => setMenu(!menu)}
      >
        {menu ? <RiCloseLine size={30} /> : <RiMenu2Line size={30} />}
      </button>
    </nav>
  );
};

export default Navbar;
