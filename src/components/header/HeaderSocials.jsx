import React from 'react'
import  {BsLinkedin} from 'react-icons/bs'
import  {FaGithub} from 'react-icons/fa'
import  {SiFiverr} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/freddie-j-420660b3/" target="_blank"><BsLinkedin/> </a>
        <a href="https://github.com/xjmaine" target="_blank"><FaGithub/></a>
        <a href="https://fiverr.com" target="_blank"><SiFiverr/></a>
    </div>
  )
}

export default HeaderSocials