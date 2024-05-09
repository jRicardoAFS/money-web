import React from 'react'
import './sideBar.css'
import icons from '../../styles/icons' 
import { Link } from 'react-router-dom'
const SideBar = () => {
  return (
    <div className='sideBar'>
        <Link to="/" ><img className='icon'src={icons.homeIcon}/></Link>
        <Link to="/despesas/add"><img className='icon'src={icons.add}/></Link>
        <Link to="#"><img className='icon'src={icons.config}/></Link>
        <Link to="#"><img className='icon'src={icons.logout}/></Link>
    </div>
  )
}

export default SideBar