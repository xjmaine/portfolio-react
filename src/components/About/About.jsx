import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {FaRegLightbulb} from 'react-icons/fa'

const About = () => {
  return (
    <div>
      <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className='about__cards'>
            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5>Bio</h5>
              <small>8+ Working Experience</small>
            </article>

            <article className='about__card'>
              <FaRegLightbulb className='about__icon'/>
              <h5>Elevator Pitch</h5>
              <small> <a href="#">View</a> </small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Portfolio</h5>
              <small>15+ Completed Projects</small>
            </article>

          </div>
          <p> 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis reprehenderit quod nemo, illum architecto earum nihil modi magni quidem, amet id. Ipsum in nostrum nam perspiciatis obcaecati labore repellat ex!
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
          </div>

        </div>
      </section>
    </div>
  )
}

export default About
