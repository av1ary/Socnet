import React from 'react';
import classes from './Profile.module.css';
import UserPosts from "./UserPosts/UserPosts";
import Userinfo from "./Userinfo/Userinfo";
import Userdetail from "./Userdetail/Userdetail";

const Profile = (props) => {
    
    console.log(props.profile)

    return (
        <div className={classes.profile}>
            <Userinfo/>
            <Userdetail/>
            <UserPosts postcont={props.profile.postcont}/>
        </div>
    )
}

export default Profile