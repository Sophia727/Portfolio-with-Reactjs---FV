import React from 'react'
import Title2 from '../components/Title2'
import myPic from '../assets/images/IMG_2099.PNG'


function AboutMe() {
  return (
    <div id="AboutMe" className='bg-[#000409] px-6 md:p-14 m-0 md:w-[100%] h-[100%]'>
      <Title2 title2Name="About me" class="lg:text-left  md:ml-14 lg:pt-[100px] text-center md:text-left"/>
      <div className='justify-center md:flex-nowrap flex-wrap-reverse flex lg:items-center lg:mt-0 mt-8 md:flex md:flex-row'>
        
        <div className='text-myWhite px-0 md:pl-5 text-xl mx-8 my-8 md:text-justify lg:leading-10'>
          <p className='mb-2'>
          Hello and welcome to my portfolio page!
          </p>
          <p className='mb-2'>
          My name is Sophia Toukram and as you know I am a Web Developper. 
          </p>
          <p className='mb-2'>
          As a full-Stack specialized, i like to marry beauty and practicality in my projects. 
          <i className="fa-solid fa-hand-holding-heart"></i> </p>
          <p className='mb-2'>
          Considering my past experiences, i am a quick learner and a born leader with polyglot advantages. 
          <i className="fa-solid fa-wand-magic-sparkles"></i>          
          </p>
        </div>
        <div className='m-2 mb-10 md:w-[50%] md:hidden lg:block '>
          <img src={myPic} alt="My picture"/>
        </div>
        
      </div>

    </div>
  )
}

export default AboutMe