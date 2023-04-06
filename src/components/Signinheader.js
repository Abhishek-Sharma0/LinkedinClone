import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import PeopleIcon from '@material-ui/icons/People';
import ExploreIcon from '@material-ui/icons/Explore';
import { BorderLeft, BusinessCenter, SupervisorAccount } from '@material-ui/icons';
import img from '../../src/linkedin-logo-transparent-png-16.png'
import { Link } from "react-router-dom";
import "../componentscss/Header.css"
export default function Signinheader() {
    return (
        <div className="mainHeader" style={{ color: "black" ,border: "none" ,marginRight: "10%" }}>
            <div>
                <Toolbar className='toolbar signintoolbar'>
                    <img src={img} style={{ objectFit: "contain", height: "40px" }} className="logoimage" />
                    <div className="iconsdiv" style={{width: "35%",justifyContent: "space-around"}}>
                        <IconButton color="black" className='iconsitem'>
                            <ExploreIcon style={{ color: "black" }} />

                            <span style={{ fontSize: "12px", fontWeight: "800" }} className="iconspan" >Discover</span>
                        </IconButton>
                        <IconButton color="black" className='iconsitem'>
                            <PeopleIcon style={{ color: "black" }} />
                            <span style={{ fontSize: "12px", fontWeight: "800" }} className="iconspan">People</span>
                        </IconButton>
                        <IconButton color="black" className='iconsitem'>
                            <BusinessCenter style={{ color: "black" }} />

                            <span style={{ fontSize: "12px", fontWeight: "800" }} className="iconspan">Jobs</span>
                        </IconButton>
                        <div className='loginbutton' style={{ display: "flex", gap: "15px" , BorderLeft: "2px solid gray",padding: "0 15px" }}>
                            <Link to="/join" style={{display: "flex",alignItems: "center",justifyContent: "center",textDecoration: "none"}}>
                            <button style={{ border: "none", fontSize: "16px", background: "none"  }}>Join now</button>
                            </Link>
                            <Link to="/" style={{display: "flex",alignItems: "center",justifyContent: "center",textDecoration: "none"}}>
                            <button style={{ color: "skyblue", padding: "15px", border: "2px solid skyblue", borderRadius: "800px", width: "100px" }}>Sign in</button>
                            </Link>
                        </div>

                    </div>
                </Toolbar>
            </div>
        </div>
    );
}

