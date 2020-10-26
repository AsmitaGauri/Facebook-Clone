import React,{useEffect,useState} from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import db from './firebase'

function Feed() {

    const [posts,setPosts]=useState([]);

    useEffect(() => {
        db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot)=>{
            setPosts(snapshot.docs.map((doc)=>({id:doc.id,data:doc.data()})))
        })
        // return () => {
        //     cleanup
        // }
    }, [])
    return (
        <div className="feed row">
            <StoryReel/>
            <MessageSender/>
           
           {
               posts.map((post)=>{
                   return(
                    <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    image={post.data.image}
                    message={post.data.message}
                    username={post.data.username}
                    timestamp={post.data.timestamp}
                    />
                   );
                  
               })
           }
        </div>
    )
}

export default Feed
