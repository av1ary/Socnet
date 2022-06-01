import React from 'react';
import classes from './Profile.module.css';
import UserPosts from "./UserPosts/UserPosts";
import Userinfo from "./Userinfo/Userinfo";
import Userdetail from "./Userdetail/Userdetail";

const Profile = () => {
    return (
        <div className={classes.profile}>
            <Userinfo/>
            <Userdetail/>
            <UserPosts/>

        </div>
    )
}

export default Profile