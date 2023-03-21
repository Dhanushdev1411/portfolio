import React from 'react'
import me from '../../assests/dhanushya.jpg';
import './about.css';
import {BsLinkedin} from 'react-icons/bs';
import {AiOutlineGithub} from 'react-icons/ai'
import {SiLeetcode} from 'react-icons/si'
const About = () => {
  return (
    <section id="about">
      <h5 className='about-h5'>Get To Know</h5>
      <h2 className='about-h2'>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="About Image"/>
          </div>
        </div>
        <div className= "about__content">
          <p>
          An aspiring engineering student, who hopes for opportunities to reveal my skills. An enthusiastic student with highly motivated leadership skills and professional skills to solve problems effectively.
          </p>
          <div className="about__socials">
            <a href="https://www.linkedin.com/in/dhanushya-devendran-206b56200/"target="--blank"><BsLinkedin size="36px"/></a>
            <a href="https://github.com/Dhanushdev1411"target="--blank"><AiOutlineGithub size="36px"/></a>
            <a href="https://leetcode.com/user3000Bg/"target="--blank"><SiLeetcode size="36px"/></a>
          </div>
          <br/>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About