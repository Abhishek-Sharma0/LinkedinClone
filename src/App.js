import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Postbar from './components/Postbar';
import { useEffect, useState } from 'react';
import Signinpage from './components/Signinpage';
import { useDispatch, useSelector } from 'react-redux';
import Widgets from './components/Widgets';
function App() {
  const dispatch=useDispatch();
  const user =useSelector((state)=> state.userstate.user);
  console.log(user);
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
