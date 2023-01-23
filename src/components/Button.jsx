import React from 'react'

function Button(props) {
  return (
    
      <button  className='py-2 px-4 w-28 text-center md:p-3 m-3 md:w-32 border-2 border-solid border-myLightblue hover:bg-myPink hover:border-myPink'>{props.btn_name}</button>
      
  )
}

export default Button