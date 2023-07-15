import React, { useContext, useRef } from 'react'
import twiter from '../../assest/twitter-logo-4 1.svg'
import '../Login/Login.scss'
import { ButtonModal } from '../sidebar/button'
import axios from 'axios'
import { info } from 'sass'
import { LoginContext } from '../context/Context'
const url = 'https://reqres.in/api'
const Login = () => {
    const {setToken} = useContext(LoginContext)

    const emailRef = useRef(null)
    const passwordRef  = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const info ={
           email: emailRef.current.value,
           password : passwordRef.current.value
        }

    axios.post(`${url}/login`,info)
    .then(res => {
        if(res.status === 200){
           localStorage.setItem('token', res?.data?.token) 
           setToken(res?.data?.token)
        }
    
    })
    .catch(err => {
        alert(err)
    })

    }
  return (
    <div className='login'>
      <img src={twiter} alt="logo" />
      <h1>Log in to Twitter</h1>
      <form className='form' onSubmit={handleSubmit}>
        <input ref={emailRef} type="email" placeholder='Phone number, email address' />
        <input ref={passwordRef} type="password" placeholder='Password'/>

     <div className="btn1">
     <ButtonModal  type='primary' htmltype='submit'>
            {'Login'}
        </ButtonModal>
     </div>
      </form>
    </div>
  )
}

export default Login
