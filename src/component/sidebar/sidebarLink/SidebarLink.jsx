import React from 'react'
import '../sidebarLink/SidebarLink.scss'
import { Link } from 'react-router-dom'

export const SidebarLink = ({img,text}) => {
  return (
    <div>
      <li className='sidebar-item'>
        <img src={img} alt={text} />
        <Link className='link'>{text}</Link>
      </li>
    </div>
  )
}

export default SidebarLink
