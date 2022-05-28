import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.profile}>
            <img className={classes.profilebackphoto} src="https://www.britannica.com/explore/savingearth/wp-content/uploads/sites/4/2020/07/AdobeStock_221175504-1536x1024.jpeg" />
            <div>
                ava and desc
            </div>
            <div>
                posts
                <div>
                    post1
                </div>
                <div>
                    Post2
                </div>
                <div>
                    Post3
                </div>
            </div>
        </div>
    )
}

export default Profile