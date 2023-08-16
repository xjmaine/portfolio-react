import React from 'react'
import  CV from '../../assets/cv.pdf';

function CTA() {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>View Bio</a>
      <a href="https://www.linkedin.com/in/freddie-j-420660b3/" target="_blank" className='btn btn-primary'>My LinkedIn Profile</a>
    </div>
  )
}

export default CTA;
