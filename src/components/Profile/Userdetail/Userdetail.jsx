import React from 'react';
import classes from './Profile.module.css';
import UserPosts from "./UserPosts/UserPosts";
import Userinfo from "./Userinfo/Userinfo";

const Profile = () => {
    return (
        <div className={classes.profile}>
            <Userinfo/>
            <UserPosts/>

        </div>
    )
}

export default Profile