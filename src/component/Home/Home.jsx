import React, { useContext } from 'react'
import { LoginContext } from '../context/Context'
import '../Home/home.scss'
import HomeComponent from './homeComponent/HomeComponent'
import Comment from './Comment/Comment'
import comment1 from '../../assest/comment-img.png'
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
import img8 from '../../assest/image 8.png'


export const Home = () => {
    const {setToken } = useContext(LoginContext)

    const handleClose = () => {
        localStorage.removeItem('token')
        setToken(null)
    }
  return (
    <div>
        <header>
            <nav>
            <h1>Home</h1>
         <button className='close' onClick={handleClose}>
            Log out
        </button>
            </nav>
            <div className="happening">
                <HomeComponent/>
            </div>
            <div className="comment-list">
                <Comment
                img={comment1}
                title='Designsta'
                span='@inner · 25m'
                text="Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?"
                img2={commentimg}
                img3={commentimg2}
                img4={commentimg3}
                img5={commentimg4}
                img6={commentimg5}
                />
                      <Comment
                img={comment2}
                title='cloutexhibition'
                span='@RajLahoti · 22m'
                text="YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam."
                img2={commentimg6}
                img3={commentimg7}
                img4={commentimg8}
                img5={commentimg4}
                img6={commentimg5}
                />
                <Comment
                img={comment3}
                title='CreativePhoto'
                span='@cloutexhibition · 1h'
                text='Обетда..... 
                Кечиринглар'
                img2={commentimg}
                img3={commentimg2}
                img4={commentimg3}
                img5={commentimg4}
                img6={commentimg5}
                />
               <div className="commnet-end-img">
               <img className='commnet-img-all' src={img8} alt="rasm" />
               </div>
            </div>
        </header>
    </div>
  )
}

export default Home
