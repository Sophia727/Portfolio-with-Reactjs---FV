import React from 'react'

function Work_exp() {
  return (
    <div>
        <h6>{this.props.date}</h6>
        <h4>{this.props.school}</h4>
        <h2>{this.props.diploma}</h2>
        <p>{this.props.description}</p>
    </div>
  )
}

export default Work_exp