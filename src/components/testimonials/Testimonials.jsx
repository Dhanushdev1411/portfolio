import React from 'react'
import './testimonials.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
  {
    name:'Shared usage of workshops and labs among institutions',
    review:'A Mobile Application was developed to facilitate students to utilize the facilities of Institutions closer to their hometowns.',
    role:'Role - Front-end Developer',
    duration:'(04/06/22 - 06/09/2022)'
  },
  {
    name:'Scanner App - an application to scan QR code',
    review:'Quick Response (QR) codes are two dimensional barcodes that can be used to efficiently store small amount of data. A Mobile-based application that accesses your camera and scans the QR code and returns the results.',
    role:'Role - Front-end Developer',
    duration:'(04/01/22 - 03/02/2022)'
  },
  {
    name:'Movev Mobility (Internship)',
    review:'Mobile Application Development using Flutter. Built an application that tethers the E-vehicle with a mobile app to check the battery performance and simultaneously access other features of the E-vehicle.',
    role:'Intern type- Stipend Intern',
    duration:'(05/08/22 - 08/09/2022)'
  }
]
const Testimonials = () => {
  return (
    <section id="project">
      <h2 className='project-h2'>Projects and Internship</h2>
      <Swiper className="container testimnials__container"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({name,review, role, duration},index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                
              </div>
              <h2 className='h2-tag'>{name}</h2>
                <small className='client__review'>{review}</small>
                <h3>{role}</h3>
                <h3>{duration}</h3>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials