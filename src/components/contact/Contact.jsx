import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_czz9iz8', 'template_kgpyl0t', form.current, 'BYIngEGe5Qiq6ks6G')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  }
  return (
    <section id="contact">
      <h5 className='contact-h5'>Get In Touch</h5>
      <h2 className='contact-h2'>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h4>dhanushdev1411@gmail.com</h4>
            <a href="mailto:dhanushdev1411@gmail.com" target="_blank">Send Message</a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h4>Dhanushya Devendran</h4>
            <a href="https://www.linkedin.com/in/dhanushya-devendran-206b56200/"target="_blank">Send Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact