import React from 'react'
import { useState,useContext,createContext } from 'react'
const contextcreated=createContext();
const Mycontext = ({children}) => {
  return (
    <contextcreated.Provider>
      {children}
      </contextcreated.Provider>
  )
}

export default Mycontext
