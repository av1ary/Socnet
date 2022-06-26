import React from 'react';
import classes from './UserPosts.module.css';
import Post from "./Post/Post";

const UserPosts = (props) => {

    console.log(props.postcont)

    let ShowPosts = props.postcont.map(post=><Post text={post.text}/>)

    return (

        <div className={classes.posts}>

            {ShowPosts}

        </div>
    )
}

export default UserPosts