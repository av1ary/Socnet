import React from 'react';
import classes from './Newsfeed.module.css';
import Post from "../Profile/UserPosts/Post/Post";
import CreatePost from "./CreatPost/CreatePost";


const Newsfeed = () => {
    return (
        <div className={classes.newsfeed}>
            <CreatePost/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default Newsfeed