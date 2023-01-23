import React from 'react'

function MyInfo(props) {
  return (
    <div className='flex flex-row md:flex-col md:w-[180px] md:text-center mt-4 items-center '>
        <i className={`fa-solid ${props.fa} text-3xl text-myPink p-3 md:mr-0`}></i>
        <div className='ml-1'>
            <h3 className='mb-1'>{props.infoName}</h3>
            <h5>{props.infoItem}</h5>
        </div>
    </div>
  )
}

export default MyInfo