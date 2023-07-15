import React from 'react'
import '../homeComponent/homeComponent.scss'
import bobur from '../../../assest/bobur.png'
import image from '../../../assest/image.svg'
import gif from '../../../assest/gif.svg'
import stats from '../../../assest/stats.svg'
import smile from '../../../assest/smile.svg'
import schedule from '../../../assest/schedule.svg'


const HomeComponent = () => {
  return (
    <div className='tweet-menu'>
      <div className="bobur-img">
        <img src={bobur} alt="logo" />
        <h3>What’s happening</h3>
      </div>
      <div className="tweet">
        <div className="tweet_img">
        <img src={image} alt="logo" />
        <img src={gif} alt="logo" />
        <img src={stats} alt="logo" />
        <img src={smile} alt="logo" />
        <img src={schedule} alt="logo" />
        </div>
        <button className='btn'>Tweet</button>
      </div>
    </div>
  )
}

export default HomeComponent
