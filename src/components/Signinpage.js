import React from 'react'
import Signinheader from './Signinheader'
import SigninContent from './SigninContent'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import Join from './Join'
const Signinpage = () => {
  return (
    <BrowserRouter>
    <div style={{backgroundColor: "whitesmoke",height: "100%" ,display: "flex",flexDirection: "column",justifyContent: "spaceBetween", }}>

      <Signinheader />
      <Routes>
        <Route path='/join' element={<SigninContent />} />
        <Route path='/'element={<Join />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default Signinpage
