import React from 'react'
import './style.css'

const Button = ({ButtonFunction, ButtonName}) => {
  return (
    <button onClick={ButtonFunction}>{ButtonName.toUpperCase()}</button>
  )
}

export default Button