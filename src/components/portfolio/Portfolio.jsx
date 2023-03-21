import React from 'react'
import './portfolio.css'
import {TbPoint} from 'react-icons/tb'
const portfolio = () => {
  return (
    <section id="skill">
      <h5 className='skill-h5'>What I have</h5>
      <h2 className='skill-h2'>Skill Set</h2>
      <div className="conatiner services__conatiner">
           <article className="service">
            <div className="service__head">
              <h2 className='head-h3'>Technical Skills</h2>
            </div>
            <ul className="service_list">
              <li><TbPoint className="service-list-icon"/>
              <p>C (Expert)</p>
              </li>
              <li><TbPoint className="service-list-icon"/>
              <p>C++ (Expert)</p>
              </li>
              <li><TbPoint className="service-list-icon"/>
              <p>Java (Beginner)</p>
              </li>
              <li><TbPoint className="service-list-icon"/>
              <p>Full Stack Development</p>
              </li>
            </ul>
            </article> 

            <article className="service">
            <div className="service__head">
              <h2 className='head-h3'>Core Competencies</h2>
            </div>
            <ul className="service_list">
              <li><TbPoint className="service-list-icon"/>
              <p>DBMS</p>
              </li>
              <li><TbPoint className="service-list-icon"/>
              <p>Computer Networks</p>
              </li>
              <li><TbPoint className="service-list-icon"/>
              <p>DSA</p>
              </li>
              <li><TbPoint className="service-list-icon"/>
              <p>Operating System</p>
              </li>
            </ul>
            </article> 

            <article className="service">
            <div className="service__head">
              <h2 className='head-h3'>Soft Skills</h2>
            </div>
            <ul className="service_list">
              <li><TbPoint className="service-list-icon"/>
              <p>Time Management</p>
              </li>
              <li><TbPoint className="service-list-icon"/>
              <p>Leadership</p>
              </li>
              <li><TbPoint className="service-list-icon"/>
              <p>Teamwork</p>
              </li>
              <li><TbPoint className="service-list-icon"/>
              <p>Verbal and written communication</p>
              </li>
            </ul>
            </article>     
      </div>
    </section>
  )
}

export default portfolio