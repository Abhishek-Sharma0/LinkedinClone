import React, { useState } from 'react'
import "../componentscss/SigninContent.css"
import GoogleButton from 'react-google-button'
import { auth } from '../firebase/firbasesetup'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useSelector,useDispatch } from 'react-redux'
import { Login } from './redux/Create'
import { updateProfile } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import { signInWithPopup } from 'firebase/auth'
const Join = () => {
    const[email,setemail]=useState();
    const[password,setpassword]=useState();
    const user=useSelector((state)=>{return state.userstate});
    const dispatch=useDispatch();
    const provider=new GoogleAuthProvider();
    async function handlesubmit(e){
        e.preventDefault();
        let ref=await signInWithEmailAndPassword(auth,email,password);
        await console.log(ref.user);
        dispatch(Login({
            name: ref.user.displayName,
            email: ref.user.email,
            photourl: ref.user.photoURL,
            uid: ref.user.uid,
            }))
            setemail("");
            setpassword("");
    }
    async function handlegoogle(e){
        e.preventDefault();
        let ref=await signInWithPopup(auth, provider);
        await console.log(ref.user);
        dispatch(Login({
            name: ref.user.displayName,
            email: ref.user.email,
            photourl: ref.user.photoURL,
            uid: ref.user.uid,
            }))
            setemail("");
            setpassword("");
    }
  return (
    <div className='signincontent'>
        <diV className="formmain">
            <h1>Make most of your professional community</h1>
            <div className='formcontainer'>
                <form onSubmit={handlesubmit}>
                    <div className='labelinput'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" id='email' onChange={(e)=>{setemail(e.target.value)}} />
                    </div>
                    <div className='labelinput'>
                        <label htmlFor='password'>password(6 or more characters)</label>
                    <input type="password" id='password' onChange={(e)=>{setpassword(e.target.value)}} /></div>
            
                    <button type='submit'>Agree and Join</button>
                    <GoogleButton label='Join with Google' style={{width: "100%",marginTop: "40px"}} onClick={handlegoogle}/>
                </form>
            </div>
        </diV>
        <div></div>
      
    </div>
  )
}

export default Join
