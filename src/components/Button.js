import React from 'react'

import '../assets/scss/Button.scss'

const Button = ({text}) => {
 return (
   <button className="button">{text}</button>
 ) 
}

export default Button;