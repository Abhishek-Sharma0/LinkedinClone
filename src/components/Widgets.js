import React from 'react'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import "../componentscss/widget.css"
const Widgets = () => {
    function newsarticle(newscontent,newsheader){
        return(
            <div className="widgetarticle">
                <div className="widgetarticle-left">
                     <FiberManualRecordIcon style={{color: "skyblue"}}/>
                </div>
                <div className="widgetarticle-right">
                    <h3>{newscontent}</h3>
                    <p>{newsheader}</p>
                </div>
            </div>
        )
        
    }
  return (
      <div className='widgets'>
                <div className='widgets-header'>
                <h3>LinkedIn News</h3>
                <InfoIcon />
                </div>
                {newsarticle("chatGpt got its new version","Top news -9998 readers")}
                {newsarticle("CoronaVirus: India update","Top news -8898 readers")}
                {newsarticle("is React too good","Top news -8878 readers")}
                {newsarticle("Tesla hits new heights","Top news -6998 readers")}
                {newsarticle("Work from Home","Top news -5678 readers")}
            </div>
  )
}

export default Widgets
