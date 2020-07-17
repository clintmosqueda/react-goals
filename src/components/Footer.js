import React from 'react'

import './Footer.scss'

import Logo from '../assets/images/logo-alt.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer-content">
          <img className="footer-logo" src={Logo} alt=""/>
          <p className="footer-copy">サンプルテキストサンプル ルテキストサンプルテキストサ<br/>ンプルテキストサンプル ルテキスト</p>
        </div>
      </div>
      <div className="footer-copyright">
        <small>Copyright©2007-2019 Blog Inc.</small>
      </div>
    </footer>
  )
}

export default Footer;