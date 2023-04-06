import React, { useState } from 'react'
import "../componentscss/Sidebar.css"
import Sidebarbackground from "../componentscss/gray-plain-concrete-textured-background.jpg"
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const Sidebar = () => {
    const user = useSelector((state) => state.userstate.user);
    const search = useSelector((state) => state.searchstate.searchlist);
    const [searcharray, setsearcharray] = useState(["reactjs", "ComputerScience", "MaChineLearning", "AI", "HTML", "CSS"])
    const [bottomstyle, setbottomstyle] = useState(false);
    function handleclass() {
        setbottomstyle(bottomstyle => !bottomstyle)
    }
    return (
        <div className='sidebar-inner-div'>
            <div className='topsidebar sidebox'>
                <img src={Sidebarbackground} />
                <div className='avatardiv'>
                    <Avatar />
                </div>
                <h2>Welcome {user.name}</h2>
                <p className='email'>{user.email}</p>
                <div className='connections'>
                   <p>Connections</p>
                   <p>Grow your network</p>  
                </div>
                <div className='view'>
                    <div className='whoveiwed'>
                        <p>who viewed you</p>
                        <span>2,543</span>
                    </div>
                    <div className='veiwonpost'>
                        <p>veiws on post</p>
                        <span>2,448</span>
                    </div>
                </div>
                <ExpandMoreIcon className='notactive' onClick={handleclass} />
            </div>
            <div className={!bottomstyle ? "bottomsidebar sidebox" : "bottomsidebar sidebox active"}>
                <h4>Recent</h4>
                <div className='searchitems'>
                    {search.map((recentsearch) => {
                        return <p># {recentsearch}</p>
                    })}
                </div>
                <div className='groups'>
                    <p style={{color: "skyblue",marginLeft: "10px"}}>Groups</p>
                   <p>Frontend developers Group</p>
                   <p>React Developers Group</p>  
                </div>
            </div>

        </div>
    )
}

export default Sidebar
