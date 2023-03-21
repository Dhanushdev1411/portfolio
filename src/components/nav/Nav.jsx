import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiFillBook} from 'react-icons/ai'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {GiAchievement} from 'react-icons/gi'
import {HiOutlineBookOpen} from 'react-icons/hi'
import { useState } from 'react'
const Nav = () => {
  const[activeNav, setActiveNav]=useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav ==='#'?'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''}><AiOutlineUser/></a>
      <a href="#experience"onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'?'active':''}><HiOutlineBookOpen/></a>
      <a href="#skill"onClick={()=>setActiveNav('#skill')} className={activeNav==='#skill'?'active':''}><AiFillBook/></a>
      <a href="#services"onClick={()=>setActiveNav('#services')} className={activeNav==='#services'?'active':''}><GiAchievement/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav