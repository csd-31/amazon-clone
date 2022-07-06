import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

export default function Login() {
  const navigate = useNavigate();
 const [email, setEmail] = useState();
 const [password, setPassword] = useState();



  const login = async (e) => {
    e.preventDefault()
    // try {
    //   const user = await signInWithEmailAndPassword(auth, email, password,  navigate.push('/'))
     
    //  } catch (error) {
    //   console.log(error.message) 
    //  }

     signInWithEmailAndPassword(auth, email, password)
            .then(auth => {
                navigate('/')
            })
            .catch(error => alert(error.message))
  }

  const register = async (e) => {
    // try {
    //  const user = await createUserWithEmailAndPassword(auth, email, password)
    // } catch (error) {
    //  console.log(error.message) 
    // }

    e.preventDefault();

         createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
            // it successfully created a new user with email and password
            if (auth) {
                navigate('/')
            }
        })
        .catch(error => alert(error.message))
  }

  return (
    <div className='login'>
      <Link to='/'>
         <img
            className="login__logo"
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
         />
       </Link>

       <div className='login__container'>
         <h1>Sign in</h1>
         <form>
           <h5>E-mail</h5>
           <input  onChange={e => setEmail(e.target.value)} value={email} type='email'/>
           <h5>Password</h5>
           <input value={password} onChange={e => setPassword(e.target.value)} type='password'/>
           <button onClick={login} type='submit' className='login__signInButton'>Sign In</button>
         </form>

         <p> By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. 
           Pleasesee our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
         </p>
  
        <button onClick={register} className='login__registerButton '>Create your Amazon Account</button>
         
       </div>
    </div>
  )
}
