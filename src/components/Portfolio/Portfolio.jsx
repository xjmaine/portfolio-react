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
        <h2>Portfolio</h2>

        <div className="container portfolio_container">
          
          <div className="portfolio__frontend">
            <h3>Frontend / backend Skills</h3>
            <div className="skills_content">
              <article className='skill_details'>
                <BsPatchCheckFill className='skill_details-icon'/>
                <div>
                <h4>Java Core</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              {/*  */}
              <article className='skill_details'>
                <BsPatchCheckFill className='skill_details-icon'/>
                <div>
                <h4>Spring Boot</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              {/*  */}
              <article className='skill_details'>
                <BsPatchCheckFill className='skill_details-icon'/>
                <div>
                <h4>HTML5/CSS</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              {/*  */}
              <article className='skill_details'>
                <BsPatchCheckFill className='skill_details-icon'/>
                  <div>
                  <h4>React</h4>
                <small className='text-light'>Beginner</small>
                  </div>
              </article>
              {/*  */}
              <article className='skill_details'>
                <BsPatchCheckFill className='skill_details-icon'/>
                <div>
                <h4>Data Science</h4>
                <small className='text-light'>Beginner</small>
                </div>
              </article>
            </div>
          </div>

          <div className="portfolio__frontend">
          <h3>Projects</h3>
          <div className="skills_content">
              <article className='skill_details'>
                <BsPatchCheckFill className='skill_details-icon'/>
                <div>
                <h4>ALX-Month 2 Project</h4>
                <small className='text-light'>
                  <a href="https://tinyurl.com/month2project" target='_blank'>Project Link</a>
                </small>
                </div>
              </article>
              {/*  */}
              <article className='skill_details'>
                <BsPatchCheckFill className='skill_details-icon'/>
                  <div>
                  <h4>RDD - Main</h4>
                <small className='text-light'>Spring Boot Project</small>
                  </div>
              </article>
              {/*  */}
              <article className='skill_details'>
                <BsPatchCheckFill className='skill_details-icon'/>
                    <div>
                    <h4>K. Zorre - Main</h4>
                    <small className='text-light'>Wordpress Project</small>
                    </div>
              </article>
              {/*  */}
              <article className='skill_details'>
                <BsPatchCheckFill className='skill_details-icon'/>
                <div>
                <h4>Portfolio</h4>
                <small className='text-light'>React Project</small>
                </div>
              </article>
              {/*  */}
              <article className='skill_details'>
                <BsPatchCheckFill className='skill_details-icon'/>
                <div>
                <h4>Health Data Models</h4>
                <small className='text-light'>Data Science Project</small>
                </div>
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
