import React from 'react';
import {FaLinkedin} from '@react-icons/all-files/fa/FaLinkedin'
import {FaGithub} from '@react-icons/all-files/fa/FaGithub'
import {AiOutlineMail } from '@react-icons/all-files/ai/AiOutlineMail'

function Sidebar() {
  return (

      <div className="fixed top-[480px] md:top-[300px] left-0 z-50 hidden md:block">

        <ul className='flex flex-col justify-center w-10 p-0 m-0'>
        
        <a href="https://github.com/Sophia727" target="_blank" className="  mb-3 p-2 bg_icons hover:scale-125">
          <FaGithub  className="text-2xl text-myWhite  hover:text-myPink" />
        </a>
        <a href="http://linkedin.com/in/sophia-toukram" target="_blank" className="  mb-3 p-2 bg_icons hover:scale-125">
          <FaLinkedin  className="text-2xl  text-myWhite  hover:text-myPink" />
        </a>
        <a href="mailto:sophiatoukram@gmail.com" target="_blank" className="  mb-3 p-2 bg_icons hover:scale-125">
          <AiOutlineMail className="text-2xl  text-myWhite  hover:text-myPink" />
        </a>
        </ul>
        
        
      </div>

  )
}

export default Sidebar