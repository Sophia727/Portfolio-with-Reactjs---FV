import React from 'react'
import MyInfo from './MyInfo'
import Title2 from './Title2'
import "/node_modules/flag-icons/css/flag-icons.min.css";

function Skills() {
  return (
    <div className='bg-[#000409] flex flex-col align-middle md:py-20 md:px-20'>
        <Title2 title2Name="Skills" class=" lg:text-left lg:ml-5 md:ml-5 lg:pt-[20px] text-center md:text-left"/>
        <div className='text-white text-[70px] text-center m-5 p-5 '>
          <i className="fa-brands hover:text-[#dd4b25] transition-all ease-in-out duration-500  m-2 fa-html5 "></i>
          <i className="fa-brands hover:text-[#254ce4] transition-all ease-in-out duration-500  m-2 fa-css3-alt"></i>
          <i className="fa-brands hover:text-[#efd81d] transition-all ease-in-out duration-500  m-2 fa-js"></i>
          <i className="fa-brands hover:text-[#7a10f2] transition-all ease-in-out duration-500  m-2 fa-bootstrap"></i>
          <i className="fa-brands hover:text-[#5ed3f3] transition-all ease-in-out duration-500  m-2 fa-react"></i>
          <i className="fa-brands hover:text-[#777bb3] transition-all ease-in-out duration-500  m-2 fa-php"></i>
          <i className="fa-brands hover:text-[#f7281d] transition-all ease-in-out duration-500  m-2 fa-laravel"></i>
          <i className="fa-brands hover:text-[#e94e31] transition-all ease-in-out duration-500  m-2 fa-git-alt"></i>
        </div>
        <Title2 title2Name="Languages" class=" lg:text-left lg:ml-5 md:ml-5 lg:pt-[20px] text-center md:text-left"/>
        <div className=' md:flex-row md:flex  md:text-sm lg:flex md:justify-center text-white'>
          <div className='ml-[35%] md:m-0 md:flex-row md:flex md:w-[500px]'>
          <MyInfo fa="fi fi-fr" infoName="French" infoItem="Fluent"/>
          <MyInfo fa="fi fi-gb" infoName="English" infoItem="Fluent"/>
          <MyInfo fa="fi fi-ru" infoName="Russian" infoItem="Fluent"/>
          <MyInfo fa="fi fi-es" infoName="Spanish" infoItem="Basic"/>
          <MyInfo fa="fi fi-ma" infoName="Arabic " infoItem="Fluent"/>
          </div>
          

        </div>
        
        
    </div>
  )
}

export default Skills