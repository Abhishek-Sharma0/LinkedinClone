import React, { useState } from 'react'
import "../componentscss/SigninContent.css"
import GoogleButton from 'react-google-button'
import { auth } from '../firebase/firbasesetup'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { useSelector,useDispatch } from 'react-redux'
import { Login } from './redux/Create'
import { updateProfile } from 'firebase/auth'
const SigninContent = () => {
    const[email,setemail]=useState();
    const[name,setname]=useState();
    const[password,setpassword]=useState();
    const user=useSelector((state)=>{return state.userstate});
    const dispatch=useDispatch();
    async function handlesubmit(e){
        e.preventDefault();
        let ref=await createUserWithEmailAndPassword(auth,email,password);
        console.log("this is uid looking for"+ " "+ref.user.uid);
        await updateProfile(auth.currentUser, {
            displayName: name , photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            console.log("updateduser")
          }).catch((error) => {
            console.log(error);
          });
        dispatch(Login({
            name: ref.user.displayName,
            email: ref.user.email,
            photourl: ref.user.photoURL,
            uid: ref.user.uid,
            }))
    }
  return (
    <div className='signincontent'>
        <diV className="formmain">
            <h1>Welcome to your professional community</h1>
            <div className='formcontainer'>
                <form onSubmit={handlesubmit}>
                <div className='labelinput'>
                    <label htmlFor='email'>Name</label>
                    <input type="text" id='name' onChange={(e)=> setname(e.target.value)} style={{outline: "1px solid gray",marginLeft: "0",backgroundColor: "white"}} />
                    </div>
                    <div className='labelinput'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" id='email' onChange={(e)=> setemail(e.target.value)} />
                    </div>
                    <div className='labelinput'>
                        <label htmlFor='password'>password</label>
                    <input type="password" id='password' onChange={(e)=> setpassword(e.target.value)}  />
                    </div>
                    <p>By clicking Agree & Join, you agree to the LinkedIn User Agreement, Privacy Policy, and Cookie Policy.</p>
                    <button type='submit'>Sign in</button>
                    <GoogleButton label='Join with Google' style={{width: "100%",marginTop: "40px"}}/>
                </form>
            </div>
        </diV>
        <div></div>
      
    </div>
  )
}

export default SigninContent
