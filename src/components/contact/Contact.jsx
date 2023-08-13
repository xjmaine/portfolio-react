import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaGithub} from 'react-icons/fa'
import {BsClipboard2Data} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_skc8lt1', 'template_irb540w', form.current, 'jqGz07MPQH7japMpE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };


  return (
    <div>
      <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>remnant23@duck.com</h5>
              <a href="mailto:remnant23@duck.com" target='_blank'>Send a message</a>
            </article>

            <article className="contact__option">
              <FaGithub className='contact__option-icon'/>
              <h4>GitHub</h4>
              <h5>View My Profile</h5>
              <a href="https://github.com/xjmaine/" target='_blank'>Click here</a>
            </article>

            <article className="contact__option">
              <BsClipboard2Data className='contact__option-icon'/>
              <h4>Data Science Journey</h4>
              <h5>View on ALX</h5>
              <a href="#" target='_blank'>Click here</a>
            </article>
          </div>
          {/* end of contact options */}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your full name' required/>
            <input type="email" name='email' placeholder='Your email' required />
            <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
