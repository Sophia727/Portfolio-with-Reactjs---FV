import React from 'react'

function Study(props) {
  return (
    <div className='mx-12 lg:w-[30%] lg:mx-0 relative md:h-50 p-2 md:p-5 m-2 bg-[#0e1e31] rounded transition duration-300 ease-in-out text-myWhite flex flex-col shadow-inner hover:scale-110  shadow-[#444761]'>
        <h6 className='text-sm p-3 absolute -top-7 left-8 bg-myPink rounded text-center'>
          {props.date}</h6>
          <div className="flex flex-col justify-around p-4">
            <h4 className="mb-2 text-md text-myPink">{props.school}</h4>
            <h2 className='text-2xl my-4'>{props.diploma}</h2>
            <p className="text-sm mb-3">{props.description}</p>
          </div>
        
    </div>
  )
}

export default Study