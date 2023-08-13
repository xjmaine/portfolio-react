import React from 'react'
import './portfolio.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Portfolio = () => {
  return (
    <div>
      <section id='portfolio'>
        <h5>
          My Skills
        </h5>
        <h2>Projects</h2>
        <div className="container portfolio_container">
          <div className="portfolio__frontend">
            <h3>Frontend / backend Skills</h3>
            <div className="skills_content">
              <article className='skill_details'>
                <BsPatchCheckFill/>
                <h4>Java Core</h4>
                <small className='text-light'>Experienced</small>
              </article>
              {/*  */}
              <article className='skill_details'>
                <BsPatchCheckFill/>
                <h4>Java Spring Boot</h4>
                <small className='text-light'>Intermediate</small>
              </article>
              {/*  */}
              <article className='skill_details'>
                <BsPatchCheckFill/>
                <h4>HTML5/CSS</h4>
                <small className='text-light'>Experienced</small>
              </article>
              {/*  */}
              <article className='skill_details'>
                <BsPatchCheckFill/>
                <h4>React</h4>
                <small className='text-light'>Beginner</small>
              </article>
              {/*  */}
              <article className='skill_details'>
                <BsPatchCheckFill/>
                <h4>Data Science</h4>
                <small className='text-light'>Beginner</small>
              </article>
            </div>
          </div>

          <div className="portfolio__frontend">
          <h3>Projects</h3>
          <div className="skills_content">
              <article className='skill_details'>
                <BsPatchCheckFill/>
                <h4>RDD - Main Web App</h4>
                <small className='text-light'>Spring Boot Project</small>
              </article>
              {/*  */}
              <article className='skill_details'>
                <BsPatchCheckFill/>
                <h4>Dunkwa - Main Web App</h4>
                <small className='text-light'>Spring Boot Project</small>
              </article>
              {/*  */}
              <article className='skill_details'>
                <BsPatchCheckFill/>
                <h4>K. Zorre Properties - Main</h4>
                <small className='text-light'>Wordpress Project</small>
              </article>
              {/*  */}
              <article className='skill_details'>
                <BsPatchCheckFill/>
                <h4>Portfolio</h4>
                <small className='text-light'>React Project</small>
              </article>
              {/*  */}
              <article className='skill_details'>
                <BsPatchCheckFill/>
                <h4>Health Data Models</h4>
                <small className='text-light'>Data Science Project</small>
              </article>
              {/*  */}
          </div>
          </div>

        </div>
        
      </section>
    </div>
  )
}

export default Portfolio
