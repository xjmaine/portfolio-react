import React from 'react'
import './footer.css'
import  {BsLinkedin} from 'react-icons/bs'
import  {FaGithub} from 'react-icons/fa'
import  {SiFiverr} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>FJ</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#elevators">Elevator Pitch</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/freddie-j-420660b3/" target="_blank"><BsLinkedin/> </a>
        <a href="https://github.com/xjmaine" target="_blank"><FaGithub/></a>
        <a href="https://fiverr.com" target="_blank"><SiFiverr/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; <a href="https://github.com/xjmaine" target="_blank">Clarika. All Rights Reserved</a></small>
      </div>
    </footer>
  )
}

export default Footer
