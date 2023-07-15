import React from 'react'
import '../Revolution/Revolution.scss'

export const Revolution = ({img,text1,title,tweets}) => {
  return (
    <div>
    <div className="revolution">
     <div className="text">
     <p>{text1}</p>
        <h4>{title}</h4>
        <p>{tweets}</p>
     </div>
        <div className="img">
            <img src={img} alt='logo' />
        </div>
    </div>
    </div>
  )
}

export default Revolution
