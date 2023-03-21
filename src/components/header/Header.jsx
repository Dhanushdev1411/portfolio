import React from 'react'
import './header.css'
import CTA from './CTA'
const Header = () => {
  return (
    // <div>Footer</div>
      <div className="container header__container">
        <h4 className='text-light'>Hello I'm</h4>
        <h1>Dhanushya Devendran</h1>
        <h4 className="text-light">Undergrad Student</h4>
        <CTA/>
      </div>
  )
}

export default Header