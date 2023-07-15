import React from 'react'
import '../Profile/Profile.scss'
import { ButtonModal } from '../sidebar/button'
import { Navigate, useNavigate } from 'react-router-dom'
import movlonov from '../../assest/Rectangle 13.png'
import bobur from '../../assest/Ellipse 4.png'
import { Button } from 'antd'
import Comment from '../Home/Comment/Comment'
import SectionCard from './SectionCard/SectionCard'
import bobur1 from '../../assest/bobur.png'
import comment2 from '../../assest/comment-img2.png'
import comment3 from '../../assest/comment-img3.png'
import commentimg from '../../assest/comment1.svg'
import commentimg2 from '../../assest/comment2.svg'
import commentimg3 from '../../assest/comment3.svg'
import commentimg4 from '../../assest/comment4.svg'
import commentimg5 from '../../assest/comment5.svg'
import commentimg6 from '../../assest/Frame 18.svg'
import commentimg7 from '../../assest/Frame 19.svg'
import commentimg8 from '../../assest/Frame 20.svg'
import boburall from '../../assest/boburall.png'

export const Profile = () => {
    const navigate = useNavigate()
    const  handleCloseHome = () => {
        navigate(-1)

    }
  return (
    <div>
     <section>
        <div className="section">
        <i id='icons' onClick={handleCloseHome} class="fa-solid fa-arrow-right-from-bracket fa-rotate-180"></i>
        <div className="text">
        <h3>Bobur</h3>
        <span>1,070 Tweets</span>
        </div>
        </div>
        <img className='section_img' src={movlonov} alt="photo" />
     <div className="section_menu">
     <div className="section_bobur">
            <img className='bubur_img' src={bobur} alt="photo" />
        </div>
       <div className="button">
       <Button>Edit prifile</Button>
       </div>
     </div>
   <div className="section-card">
   <SectionCard/>
   </div>
         <div className="pin">
         <i class="fa-solid fa-thumbtack"></i>
         <span>Pinned Tweet</span>
         </div>
         <div className="comment-list list-commant">
                <Comment
                img={bobur1}
                title='Bobur'
                span='@bobur_mavlonov · Apr 1'
                text="4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim"
                img2={commentimg}
                img3={commentimg2}
                img4={commentimg3}
                img5={commentimg4}
                img6={commentimg5}
                />
                      <Comment
                img={bobur1}
                title='Bobur'
                span='@bobur_mavlonov · Apr 1'
                text="Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz. 

                Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida. 
                
                Gap faqat biznes trenerlar haqida emas."
                img2={commentimg6}
                img3={commentimg7}
                img4={commentimg8}
                img5={commentimg4}
                img6={commentimg5}
                />
                <Comment
                img={bobur1}
                title='Bobur'
                span='@bobur_mavlonov · Apr 1'
                text="A bo'pti maskamasman"
                img2={commentimg}
                img3={commentimg2}
                img4={commentimg3}
                img5={commentimg4}
                img6={commentimg5}
                />
               <div className="commnet-end-img">
               <img className='commnet-img-all' src={boburall} alt="rasm" />
               </div>
            </div>
     </section>
    </div>
  )
}

export default Profile
