import React, { useState} from 'react'
import "../componentscss/Postbar.css"
import CreateIcon from '@material-ui/icons/Create';
import IconButtons from './IconButtons';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import ImageIcon from '@material-ui/icons/Image';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import { db } from '../firebase/firbasesetup';
import { addDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from 'react';
import { onSnapshot } from 'firebase/firestore';
import { Avatar } from '@material-ui/core';
import { serverTimestamp } from "firebase/firestore";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import { orderBy } from 'firebase/firestore';
import { query} from "firebase/firestore";  
import FlipMove from 'react-flip-move';

const Postbar =() => {
    const [post, setpost] = useState([]);
    const [postmessage, setpostmessage] = useState();
    const [allpost, setallpost] = useState([]);
    const user = useSelector((state) => state.userstate.user);
    console.log(serverTimestamp());
    useEffect(() => {
        const unsub = onSnapshot(query(
            collection(db, "post"),
            orderBy("timestamp", "desc") // Add the orderBy method here
            ), (querySnapshot) => {
            const newPosts = querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
            setpost(newPosts);
        });
        return () => unsub();
    }, []);

    async function addpost(e) {
        e.preventDefault();
        if (postmessage === "") {
            return;
        }
        try {
            const newPost = { userName: user.name, postmessage: postmessage, photourl: user.photourl, uid: user.uid, timestamp: serverTimestamp(), };
            // The addDoc method is used to add a new document to a collection and automatically generates a unique ID for the new document
            
            // On the other hand, the set method is used to set the data for a specific document in a collection. If the document already exists, the set method will overwrite the existing data. If the document does not exist, the set method will create a new document with the specified data
            const docRef = await addDoc(collection(db, "post"), newPost);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        setpostmessage("");

    }

    return (
        <div className='postdiv'>
            <div className='formsearch'>
                <div className='iputcontaine'>
                    <div className="searchIcon">
                        <CreateIcon />
                    </div>
                    <form onSubmit={addpost}>
                        <input type="text" onChange={(e) => setpostmessage(e.target.value) }value={postmessage} />
                    </form>
                </div>
                <div className='formbuttons'>
                    <IconButtons color="skyblue" title="Photo" Icontype={ImageIcon} />
                    <IconButtons color="orange" title="Video" Icontype={SubscriptionsIcon} />
                    <IconButtons color="gray" title="Event" Icontype={EventNoteIcon} />
                    <IconButtons color="red" title="Write article" Icontype={CalendarViewDayIcon} />
                </div>
            </div>
            <FlipMove>
            <div className='publicpost'>
                {post.map((message) => {
                    return <div className='publicpostitem' key={message.id}>
                        <div className="profile">
                            <Avatar style={{width: "60px",height: "60px"}} src="/broken-image.jpg" />
                            <div className="profiledate">
                                <p style={{ fontSize: "22px", fontWeight: "600", height: "50%" }}>{message.data.userName}</p>
                                {message.data.timestamp&&<p style={{ fontSize: "12px", fontWeight: "400", color: "gray" }}>{message.data.timestamp.toDate().toLocaleString()}</p>}
                            </div>
                        </div>
                        <div className="profilecontent">
                            <p style={{fontSize: "18px",paddingLeft: "15px"}}>{message.data.postmessage}</p>
                            <div className="profilebuttons">
                                <div>
                                    <ThumbUpAltIcon />
                                    <span>Like</span>
                                </div>
                                <div>
                                <CommentIcon />
                                    <span>Comment</span>
                                </div>
                                <div>
                                    <ShareIcon />
                                    <span>Share</span>
                                </div>
                                <div>
                                    <SendIcon />
                                    <span>Send</span>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            </FlipMove>

        </div>
    )
}

export default Postbar
