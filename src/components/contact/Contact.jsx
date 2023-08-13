import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'

const Contact = () => {
  return (
    <div>
      <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact_option">
              <MdOutlineEmail/>
              <h4>Email</h4>
              <h5>remnant23@duck.com</h5>
              <a href="mailto:remnant23@duck.com">Send a message</a>
            </article>

            <article className="contact_option">
              <MdOutlineEmail/>
              <h4>GitHud</h4>
              <h5>remnant23@duck.com</h5>
              <a href="mailto:remnant23@duck.com">Send a message</a>
            </article>

            <article className="contact_option">
              <MdOutlineEmail/>
              <h4>Data Science Journey</h4>
              <h5>View on ALX</h5>
              <a href="#">Link</a>
            </article>
          </div>
          {/* end of contact options */}
          <form action=""></form>
        </div>
      </section>
    </div>
  )
}

export default Contact
