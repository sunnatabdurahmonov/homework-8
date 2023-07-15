import React from 'react'
import './follow.scss'

export const Follow = ({img2,name,email}) => {
  return (
    <div>
     <div className="follow">
        <div className="follow_img">
            <img src={img2} alt={name} />
        </div>
        <div className="follow_name">
            <h4>{name}</h4>
            <p>{email}</p>
        </div>
     </div>
    </div>
  )
}

export default Follow
