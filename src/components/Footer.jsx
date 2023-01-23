import { AiOutlineMail } from '@react-icons/all-files/ai/AiOutlineMail';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import React from 'react'

function Footer() {
  return (
    <div className='bg-[#000409] md:p-10 flex flex-col p-5' >
      
      <div className='justify-center space-x-7 flex-row flex md:hidden'>
      <a href="http://" target="_blank" className=" p-2 bg_icons hover:scale-125">
          <FaInstagram color="white" className="text-2xl" />
        </a>
        <a href="http://" target="_blank" className="p-2 bg_icons hover:scale-125">
          <FaGithub color="white" className="text-2xl" />
        </a>
        <a href="http://" target="_blank" className="p-2 bg_icons hover:scale-125">
          <FaLinkedin color="white" className="text-2xl" />
        </a>
        <a href="http://" target="_blank" className="p-2 bg_icons hover:scale-125">
          <AiOutlineMail color="white" className="text-2xl" />
        </a>
      </div>

      <h6 className=' pt-3 justify-center flex text-myWhite my-3 text-xs'>© Copyright - Designed by Sophia Toukram - 2023</h6>

    </div>
    
  )
}

export default Footer;