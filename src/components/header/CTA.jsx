import React from 'react'
import  CV from '../../assets/cv.pdf';

function CTA() {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>View Bio</a>
      <a href="https://youtu.be/l9KC7eISpUU?feature=shared" target="_blank" className='btn btn-primary'>Elevator Pitch</a>
    </div>
  )
}

export default CTA;
