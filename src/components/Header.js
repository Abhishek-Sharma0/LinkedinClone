import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import HomeIcon from '@material-ui/icons/Home';
import { BusinessCenter, SupervisorAccount } from '@material-ui/icons';
import img from '../../src/Linkedin-Logo-Png-Transparent-Background-1.png'
import "../componentscss/Header.css"
import { Avatar } from '@material-ui/core';
import { auth } from '../firebase/firbasesetup';
import { signOut } from 'firebase/auth';
import { Logoff } from './redux/Create';
import { Dispatch } from '@reduxjs/toolkit';
import { useEffect, useState,useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Aadd,Rremove } from '../components/redux/Create'

export default function Header() {
    const dispatch=useDispatch();
    const[itemsearched,setitemsearched]=useState();
    const searchlist = useSelector(state => state.searchstate.searchlist);
    const[iconstate,seticonstate]=useState(true)
    const[searchstate,setsearchstate]=useState(false);
    const inputRef = useRef(null);
    async function handlesignout(){
        try {
            await signOut(auth);
            dispatch(Logoff());
          } catch (error) {
            console.log('Error logging out:', error);
          }
        
    }
    function handlesearch(e){
        e.preventDefault();
        if(searchlist.length>3){
            for(let i=0;i<searchlist.length-3;i++){
            dispatch(Rremove());
            }
        }
        const searchValue = e.target.value;
        dispatch(Aadd({value : itemsearched}));
        setitemsearched("");
        seticonstate(true);

    }
    function handleaddclassblur(){
        if(window.innerWidth>1000){
            return;
        }
        seticonstate(true);
        setsearchstate(false);

    }
    
    function handleaddclass() {
        if (window.innerWidth > 1000) {
          return;
        }
        seticonstate((iconstate) => !iconstate);
        setsearchstate((searchstate) => !searchstate);
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }

    return (
        <div className="mainHeader">
            <div style={{width: "100%",height: "100%"}}>
                <Toolbar className='toolbar'>
                    <div className={!searchstate?"searchdiv":"searchdiv width"}>
                        <img src={img} style={{ objectFit: "contain", height: "40px" }} />
                        <div className={!searchstate? 'iputcontainer':'iputcontainer showcontainer'}>
                            <div className="searchIcon">
                                <SearchIcon onClick={handleaddclass}/>
                            </div>
                            <form onSubmit={handlesearch} className={!searchstate? "form" : "form showform"}>
                            <input type="text" placeholder='Search' ref={inputRef} onChange={(e)=>{setitemsearched(e.target.value)}}
                            onBlur={handleaddclassblur} value={itemsearched} />
                            </form>
                        </div>
                    </div>  
                    <div className={iconstate?"iconsdiv":"iconsdiv notactivee"}>
                        <IconButton aria-label="show 4 new mails" color="black">
                            <Badge badgeContent={4} color="secondary" className='iconsitem'>
                                < HomeIcon />
                            </Badge>
                            <span style={{fontSize: "12px",fontWeight: "800"}} className="iconspan">Home</span>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="black" className='iconsitem'>
                            <Badge badgeContent={17} color="secondary">
                                <SupervisorAccount />
                            </Badge>
                            <span style={{fontSize: "12px",fontWeight: "800"}} className="iconspan">MyNetwork</span>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="black" className='iconsitem'>
                            <Badge badgeContent={17} color="secondary">
                                <BusinessCenter />
                            </Badge>
                            <span style={{fontSize: "12px",fontWeight: "800"}} className="iconspan">Jobs</span>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="black" className='iconsitem'>
                            <Badge badgeContent={17} color="secondary">
                                <ChatIcon />
                            </Badge>
                            <span style={{fontSize: "12px",fontWeight: "800"}} className="iconspan">Messaging</span>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="black" className='iconsitem'>
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                            <span style={{fontSize: "12px",fontWeight: "800"}} className="iconspan">Notifications</span>
                        </IconButton>
                        <Avatar alt="Remy Sharp"/>
                        <button style={{ color: "skyblue", padding: "15px", border: "2px solid skyblue", borderRadius: "800px", width: "100px" }} onClick={handlesignout}>Logout</button>
                    </div>
                    
                </Toolbar>
            </div>
        </div>
    );
}
