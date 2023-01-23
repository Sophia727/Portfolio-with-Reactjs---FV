import React from 'react';
import {FaInstagram} from '@react-icons/all-files/fa/FaInstagram'
import {FaLinkedin} from '@react-icons/all-files/fa/FaLinkedin'
import {FaGithub} from '@react-icons/all-files/fa/FaGithub'
import {AiOutlineMail } from '@react-icons/all-files/ai/AiOutlineMail'

function Sidebar() {
  return (

      <div className="fixed top-[480px] md:top-[300px] left-0 z-50 hidden md:block">

        <ul className='flex flex-col justify-center w-10 p-0 m-0'>
        <a href="http://" target="_blank" className=" mb-3 p-2 bg_icons hover:scale-125">
          <FaInstagram className="text-2xl  text-myWhite  hover:text-myPink" />
        </a>
        <a href="http://" target="_blank" className="  mb-3 p-2 bg_icons hover:scale-125">
          <FaGithub  className="text-2xl text-myWhite  hover:text-myPink" />
        </a>
        <a href="http://" target="_blank" className="  mb-3 p-2 bg_icons hover:scale-125">
          <FaLinkedin  className="text-2xl  text-myWhite  hover:text-myPink" />
        </a>
        <a href="http://" target="_blank" className="  mb-3 p-2 bg_icons hover:scale-125">
          <AiOutlineMail className="text-2xl  text-myWhite  hover:text-myPink" />
        </a>
        </ul>
        
        
      </div>

  )
}

export default Sidebar