import React from 'react'
import './header.css'
import CTA from './cta'
import ME from '../../assets/images/me.png'
import HeaderSocials from './headerSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5> Hello I'm</h5>
        <h1>Tanzila Abedin</h1>
        <h5 className='text-light'>FullStack Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
          <img src={ME} alt="me"/>
        </div>

        <a href='#contact' className='scroll_down'>scroll_down</a>
      </div>

    </header>
  )
}

export default Header;