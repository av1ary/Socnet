import React from 'react';
import classes from './Profile.module.css';
import UserPosts from "./UserPosts/UserPosts";

const Profile = () => {
    return (
        <div className={classes.profile}>
            <img className={classes.profilebackphoto} src="https://www.britannica.com/explore/savingearth/wp-content/uploads/sites/4/2020/07/AdobeStock_221175504-1536x1024.jpeg" />
            <div>
                ava and desc
            </div>
        <UserPosts/>

        </div>
    )
}

export default Profile