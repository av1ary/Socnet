import React from 'react';
import classes from './UserPosts.module.css';
import Post from "./Post/Post";

const UserPosts = () => {
    return (
        <div className={classes.posts}>
            <Post comtext='I am king'/>
            <Post comtext='I am developer'/>
            <Post comtext='i need a job'/>
            <Post comtext='Please, hire me'/>
        </div>
    )
}

export default UserPosts