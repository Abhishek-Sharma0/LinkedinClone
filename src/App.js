import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Postbar from './components/Postbar';
import { useEffect, useState } from 'react';
import Signinpage from './components/Signinpage';
import { auth } from './firebase/firbasesetup';
import { onAuthStateChanged } from 'firebase/auth';
import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { Login,Logoff } from './components/redux/Create';
import Widgets from './components/Widgets';
function App() {
  const[users,setuser]=useState([]);
  const dispatch=useDispatch();
  const user =useSelector((state)=> state.userstate.user);
  console.log(user);
  // onAuthStateChanged(auth,(uservalue)=>{
  //   if(uservalue){
  //         dispatch(Login({name: uservalue.user.displayName,
  //           email: uservalue.user.email,
  //           photourl: uservalue.user.photoURL,
  //           uid: uservalue.user.uid,}));
  //     }
  //     else{
  //       dispatch(Logoff());
  //     }
  //   })
  //   console.log(user);


  return (
    <>
    {(!user) ? <Signinpage />:
    <div className="App">
      <Header />
      <div className='main'>
        <Sidebar />
        <Postbar />
        <Widgets />
      </div>
    </div>}
    </>
  );
}

export default App;
