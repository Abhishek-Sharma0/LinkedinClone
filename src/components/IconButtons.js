import React from 'react'
import "../componentscss/Postbar.css"
const IconButtons = ({ color,title,Icontype }) => {
  return (
    <div style={{display: "flex",alignItems: "center",gap: "8px"}} className="buttondiv">
        <Icontype style={{color: color}} />
        <span>{title}</span>
      
    </div>
  )
}

export default IconButtons
