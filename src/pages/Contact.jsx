import Button from '../components/Button'
import {BiMailSend} from '@react-icons/all-files/bi/BiMailSend'
import Title2 from '../components/Title2'
import MyInfo from '../components/MyInfo'
import emailjs from 'emailjs-com';
import React, { useRef } from 'react';

function Contact() {
  const form = useRef();
  function sendEmail (e) {
    e.preventDefault();
    
    emailjs.sendForm("Sophia.T","template_ayohe3b", form.current , '57W2vhkskFsJbdIiK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  };
  return (
    <div id='contact' className='w-auto flex flex-col  items-center  bg-[#0e1e31] text-myWhite'>
        <Title2 title2Name="Let's get in touch!" className="mx-[15px] mb-20 lg:text-left lg:ml-5 md:ml-5 lg:pt-[20px] text-center md:text-left"/>
        <div className='mt-5 '>
          <div className='md:flex-row md:flex md:gap-5 md:text-sm lg:flex md:justify-center'>
          <MyInfo fa="fa-envelope" infoName="Email: " infoItem="sophiatoukram@gmail.com"/>
          <MyInfo fa="fa-mobile ml-1" infoName="Mobile: " infoItem="+212 670 082 427"/>
          <MyInfo fa="fa-location-pin ml-1" infoName="Location: " infoItem="Morocco "/>
          </div>
          <div className=''> 
           <form action="" onSubmit={sendEmail} ref={form} method="post" className='flex flex-col justify-center space-y-2 my-8 lg:w-[700px] lg:space-y-5'>
            <input className='bg-[#0e1e31] p-2 border-myLightBlue border-solid border-2' type="text" placeholder='Name' required/>
            <input className='bg-[#0e1e31] p-2  border-myLightBlue border-solid border-2' type="email" placeholder='Email' required/>
            <textarea className='bg-[#0e1e31] p-2 h-56  border-myLightBlue border-solid border-2' placeholder='Type...'  name="" id="" required></textarea>
            <div className=' flex justify-center md:justify-end'>
            <Button className=' border-myPink border-solid border-2' btn_name="Send"/>
            </div>
            </form>
          </div>
        </div>
    </div>
  )
}
export default Contact