import React from 'react'

function Title2(props) {
  return (
    <div>
      <h2 className={`text-myPink text-4xl font-bold pt-14 md:pt-5 ${props.class}`}>{props.title2Name}</h2>
    </div>
  )
}

export default Title2