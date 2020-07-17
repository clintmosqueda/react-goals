import React from 'react'
import { useHistory } from "react-router-dom";

import './Header.scss'

import Logo from '../assets/images/logo.png'

const Header = ({ isFormOpen, onFormOpen }) => {
  const history = useHistory();

  const handleHome = () => {
    history.push('/')
  }

  let linkText = isFormOpen ? 'CLOSE' : 'LOGIN'

  return (
    <div className="wrapper">
      <header className="header">
        <img src={Logo} alt="logo" onClick={handleHome}/>
        <button className="header-button" onClick={() => onFormOpen(!isFormOpen)}>{linkText}</button>
      </header>
    </div>
  )
}

export default Header;