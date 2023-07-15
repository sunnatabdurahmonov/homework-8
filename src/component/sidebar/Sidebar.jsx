import React from 'react'
import '../sidebar/sidebar.scss'
import { Link } from 'react-router-dom'
import twitter from '../../assest/twitter-logo-4 1.svg'
import { SidebarLink } from './sidebarLink'
import home from '../../assest/home fill.svg'
import explore from '../../assest/explore.svg'
import Notifications from '../../assest/qungiroq.svg'
import Messages from '../../assest/messages.svg'
import Bookmarks from '../../assest/bookmarks.svg'
import Lists from '../../assest/lists.svg'
import Profile from '../../assest/profile.svg'
import more from '../../assest/more.svg'
import ButtonModal from './button/ButtonModal'
import { Follow } from '../Follow'
import Bobur from '../../assest/bobur.png'
import vektor from '../../assest/Vector.svg'

export const Sidebar = () => {
  return (
    <div className='sidebarLink-list'>
        <img src={twitter} alt="logo" />
        <ul>
            <Link to='/'><SidebarLink img={home} text='Home'/></Link>
            <SidebarLink img={explore} text='Explore'/>
            <SidebarLink img={Notifications} text='Notifications'/>
            <SidebarLink img={Messages} text='Messages'/>
            <SidebarLink img={Bookmarks} text='Bookmarks'/>
            <SidebarLink img={Lists} text='List'/>
            <SidebarLink img={Profile} text='Profile'/>
            <SidebarLink img={more} text='More'/>
        </ul>
        <ButtonModal type='primary'>
            {'Tweet'}
        </ButtonModal>

     <div className="bobur_name">
     <Link to='/profile' className='bobur'>
     <Follow
        img2={Bobur}
        name='Bobur'
        email='@bobur_mavlonov'
        /></Link>
        <div className="vektor">
            <img src={vektor} alt="logo" />
        </div>
     </div>
    </div>
  )
}

export default Sidebar
