import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <div>
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Freddie Jensen</h1>
          <h5 className="text-light">Spring Boot Fullstack Developer || Data Scientist</h5>
          {/* CTA */}
          <CTA/>
          <HeaderSocials/>

          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className='scroll_down'>Scroll Down</a>

        </div>
      </header>
    </div>
  )
}

export default Header;