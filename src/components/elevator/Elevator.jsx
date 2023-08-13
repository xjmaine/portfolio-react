import React from 'react'
import './elevator.css'
import { BiCheck } from 'react-icons/bi'

const Elevator = () => {
  return (
    <div>
      <section id='elevators'>
        <h5>Elevator Pitch</h5>
        <h2>show case</h2>

        <div className="container elevator__container">
          <article className='service'>
            <div className="elevator__head">
              <h3>Pitch 1</h3>
            </div>
            <ul className='elevator__list'>
              <li>
                <BiCheck className='elevator__list-icon'/>
                <p>Empty Pitch Link</p>
              </li>
              <li>
                <BiCheck className='elevator__list-icon'/>
                <p>Empty Pitch Link</p>
              </li>
            </ul>
          </article>
          {/* End of card */}

          <article className='service'>
            <div className="elevator__head">
              <h3>Pitch 2</h3>
            </div>
            <ul className='elevator__list'>
              <li>
                <BiCheck className='elevator__list-icon'/>
                <p>Empty Pitch Link</p>
              </li>
              <li>
                <BiCheck className='elevator__list-icon'/>
                <p>Empty Pitch Link</p>
              </li>
            </ul>
          </article>
          {/* End of card */}

          <article className='service'>
            <div className="elevator__head">
              <h3>Pitch 3</h3>
            </div>
            <ul className='elevator__list'>
              <li>
                <BiCheck className='elevator__list-icon'/>
                <p>Empty Pitch Link</p>
              </li>
              <li>
                <BiCheck className='elevator__list-icon'/>
                <p>Empty Pitch Link</p>
              </li>
            </ul>
          </article>
          {/* End of card */}

        </div>
      </section>
    </div>
  )
}

export default Elevator
