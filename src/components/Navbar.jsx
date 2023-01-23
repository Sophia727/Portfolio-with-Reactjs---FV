import React, { useState } from 'react'
import Contact from '../pages/Contact'

function Navbar() {
    const [open, setOpen] = useState(false);

  return (
    <div className='font-bold sticky lg:w-screen top-0 md:bg-[#0e1e31a2] bg-[#0e1e31] mx-auto md:m-0 md:flex justify-between  z-50 py-3 '>
        <div className='flex justify-between'> 
            <a href="" className='text-myWhite  hover:text-myPink p-3'>sophiatoukram@gmail.com</a>
            <button onClick={()=> setOpen(!open)} className="text-myWhite te md:hidden text-3xl">
                <i className="fa-solid fa-bars mr-5"></i>
            </button>
        </div>
        <nav className='text-myWhite' >
            <ul className={`md:flex bg-[#0e1e31] gap-4 md:bg-transparent  text-white justify-between align-middle absolute left-0 md:static w-[100%] transition-all duration-500 ease-in
            ${open ? 'top-[69px]' : 'top-[-380px]'} `}>
                <li onClick={() => {setOpen(!open);}}
               className=' p-3 hover:bg-myPink transition-all duration-200'>
                    <a href="#home">Home</a>  
                </li>
                <li onClick={() => {setOpen(!open);}}
                 className=' p-3 hover:bg-myPink transition-all duration-200'>
                    <a href="#AboutMe">About</a>
                </li>
                <li onClick={() => {setOpen(!open);}}
                 className='p-3 hover:bg-myPink transition-all duration-200'>
                    <a href="#projects">Projects</a>
                </li>
                <li onClick={() => {setOpen(!open);}}
                 className='p-3 hover:bg-myPink transition-all duration-200'>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </nav>
        
    </div>
  )
}

export default Navbar