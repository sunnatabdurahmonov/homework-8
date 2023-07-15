import React from 'react'
import '../Comment/comment.scss'
import nuqta from '../../../assest/Vector.svg'
import comment1 from '../../../assest/comment1.svg'
import comment2 from '../../../assest/comment2.svg'
import comment3 from '../../../assest/comment3.svg'
import comment4 from '../../../assest/comment4.svg'
import comment5 from '../../../assest/comment5.svg'


const Comment = ({img,title,span,text,img2,img3,img4,img5,img6}) => {
  return (
    <div className="comment-menu">
          <div className='comment'>
      <div className="Designsta">
        <img src={img} alt="logo" />
      <div className="comment-text">
      <h3>{title}</h3>
        <span>{span}</span>
        <p>{text}</p>
      </div>
      </div>
      <img className='img' src={nuqta} alt="logo" />
    </div>
    <div className="comment-img">
        <img src={img2} alt="logo" />
        <img src={img3} alt="logo" />
        <img src={img4} alt="logo" />
        <img src={img5} alt="logo" />
        <img src={img6} alt="logo" />
    </div>
    </div>
  )
}

export default Comment
