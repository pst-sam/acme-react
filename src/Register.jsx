import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Icon from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'

const Register = () => {
    const [username, setUserName] = useState('')
    const [pwd, setPwd] = useState('')
    const [confirmPwd, setConfirmPwd] = useState('')
    const [user, setUser] = useState([])
    const [profile, setProfile] = useState([])
    const [isVisible, setIsVisible] = useState(true)

   const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError:(error) => console.log('Login Failed:', error)
   })

   useEffect(() => {
    if (user) {
        axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
            headers: {
                Authorization: `Bearer ${user.access_token}`,
                Accept: 'application/json'
            }
        })
        .then((res) => {
            setProfile(res.data)
        })
        .catch((err) => console.log(err))
    }
   }, [user])

   const logout = () => {
    googleLogout();
    setProfile(null);

   }

  return (
    
    <section>
    
    <section
            id="contact"
            className="p-6 mt-12 scroll-mt-16 widescreen:section-min-height tallscreen:section-min-height"
        >
            <h2
                className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white"
            >
                Register
            </h2>
            <form 
                className="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4"
            >
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    required
                    autoComplete='off'
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    minLength="3"
                    maxLength="60"
                    className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
                />
                <label htmlFor="password">Password:</label>
                <div className='flex justify-end mr-10'><button><Icon onClick={(e) =>{e.preventDefault()
                 setIsVisible(!isVisible)}} className='absolute mt-6' icon={isVisible ? eyeOff : eye} size={30}/></button></div>
                <input
                    type={isVisible ? 'password' : 'text'}
                    id="password"
                    name="password"
                    required
                    autoComplete='off'
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                    minLength="3"
                    maxLength="60"
                    className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none "
                    
                    /> 
                     
                <label htmlFor="password">Confirm Password:</label>
                <input
                    type={isVisible ? 'password' : 'text'}
                    id="confirm"
                    name="password"
                    required
                    value={confirmPwd}
                    onChange={(e) => setConfirmPwd(e.target.value)}
                    minLength="3"
                    maxLength="60"
                    className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
                />
                
                <button
                    className="bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-white p-3 w-full rounded-xl border border-solid border-slate-900 dark:border-none"
                >
                    Sign Up
                </button>
            </form><br />
            <div className='font-bold flex justify-center'>
                <h2>OR</h2>
            </div>

        </section>
        {profile ? (
            <div>
                <img src={profile.picture} alt="user image" />
                <h3>User Logged in</h3>
                <p>Name: {profile.name}</p>
                <p>Email Address: {profile.email}</p>
                <br/>
                <br/>
                <div className='flex justify-center'>
                <button onClick={logout} className='  bg-red-700 mb-12 border rounded-full px-2 pb-1 text-white font-bold'>Log out</button>
            </div>
            </div>)
            :(
        //         <div className='max-w-4xl mx-auto text-2xl sm:text-3xl mb-12 w-full px-3'>
        //     <GoogleLogin onSuccess={onSucces} onError={onError}/>
        // </div> 
            <div className='flex justify-center'>
                 <button onClick={login} className='bg-teal-700 mb-12 border rounded-full p-3 text-white font-bold'>Sign in with Google</button>
             </div>
            )
        }
         
        </section>
  )
}

export default Register