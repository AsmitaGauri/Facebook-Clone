import React,{useState} from 'react'
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import {actionTypes} from '../ReactContextApi/reducer'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {useStateValue} from '../ReactContextApi/StateProvider'
import firebase from 'firebase';
import  db from './firebase';
function MessageSender() {
    const [{user,error},dispatch]=useStateValue();

    const [input,setInput]=useState("");
    const [imageUrl,setimageUrl]=useState("");
    const msg="";
    const handleSubmit=(e)=>{
       e.preventDefault(); 
        if(input==""){
            setInput("");
            setimageUrl("");
           dispatch({
               type:actionTypes.ERROR,
               payload:"Please enter a message"
           })
        }
        else{
            db.collection('posts').add({
                message:input,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                image:imageUrl,
                username:user.displayName,
                profilePic:user.photoURL
            })
            
            .catch((err)=>alert(err.message))
     
        }
       
       setInput("");
       setimageUrl("");
    }
    return (
        <div className="messageSender">
            
            {
                        error?<p class="error">{error}</p>:null
                    }
                 
            <div className="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form action="">
                   
                    <input type="text" placeholder={`Whats on your mind, ${user.displayName}?`} className="messageSender__input" value={input} onChange={(e)=> setInput(e.target.value)} required/>
                    <input type="text" placeholder="image URL (Optional)" value={imageUrl} onChange={(e)=> setimageUrl(e.target.value)}/>
                    <button type="submit" onClick={handleSubmit}>Submit</button>

                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color:"red"}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color:"green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color:"orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
