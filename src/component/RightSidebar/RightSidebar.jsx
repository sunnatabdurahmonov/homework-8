import React from 'react'
import '../RightSidebar/rightsidebar.scss'
import settings from '../../assest/settings.svg'
import { Revolution } from './Revolution'
import vektor from '../../assest/Vector.svg'
import { Follow } from '../Follow'
import follow1 from '../../assest/Ellipse 5.png'
import follow2 from '../../assest/img_follow.png'
import ButtonModal from '../sidebar/button/ButtonModal'
import Search from 'antd/es/input/Search'

export const RightSidebar = () => {
    const onSearch = (value) => console.log(value);
  return (
    <div className='rightSidebar'>
        <Search className='search'
      placeholder="input search text"
      onSearch={onSearch}
      style={{
        width: 300,
        borderRadius:31,
      }}
    />

        <div className="trends-menu">
           <div className="setting">
           <h3>Trends for you</h3>
            <img src={settings} alt="logo" />
           </div>
           <Revolution 
           text1='Trending in Germany'
           title='Revolution'
           tweets='50.4K Tweets'
           img={vektor}
           />
              <Revolution 
           text1='Trending in Germany'
           title='Revolution'
           tweets='50.4K Tweets'
           img={vektor}
           />
              <Revolution 
           text1='Trending in Germany'
           title='Revolution'
           tweets='50.4K Tweets'
           img={vektor}
           />
           <p className='show'>Show more</p>
        </div>

        <div className="like">
            <h2>You might like</h2>
            <div className="follow_menu">
                <Follow
                img2={follow1}
                name='Mushtariy'
                email='@Mushtar565266'
                />
                <div className="button">
                    <ButtonModal type='dark'>
                        {'Follow'}
                    </ButtonModal>
                </div>
            </div>
            <div className="follow_menu">
                <Follow
                img2={follow2}
                name='Shuhratbek'
                email='@mrshukhrat'
                />
                <div className="button">
                    <ButtonModal type='dark'>
                        {'Follow'}
                    </ButtonModal>
                </div>
            </div>
            <p className='show'>Show more</p>
        </div>
        <div className="span_menu">
        <span>Terms of Service</span>
        <span>Privacy Policy</span>
        <span>Cookie Policy</span>
        <span>Imprint</span>
        <span>Ads Info</span>
        <span>More ···</span>
        <span>© 2021 Twitter, Inc.</span>
        </div>
    </div>
  )
}

export default RightSidebar
