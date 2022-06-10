import React from 'react';
import classes from './UserInfo.module.css';

const UserInfo = () => {
    return (
        <div className={classes.UserInfo}>
            <img className={classes.profilebackphoto}
                 src="https://www.britannica.com/explore/savingearth/wp-content/uploads/sites/4/2020/07/AdobeStock_221175504-1536x1024.jpeg"/>
            <img className={classes.avatar}
                 src="https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=1024"/>

            <div className={classes.Name}>
                Robin Hood
            </div>
            <div className={classes.line}></div>

            <div className={classes.detailsbutton}>
                <a href=""> <span>About</span> </a>
            </div>
            <div className={classes.detailsbutton}>
                <a href=""> <span> Photo </span> </a>
            </div>
            <div className={classes.detailsbutton}>
                <a href=""> <span>Video</span> </a>
            </div>
            <div className={classes.detailsbutton}>
                <a href=""> <span>Group</span> </a>
            </div>

            <ul className={classes.actbuttonsul}>
                <li>
                    <div className={classes.actbutton}><a href=''> <i className='bx bx-dots-horizontal-rounded'
                                                                      size='lg'> </i></a></div>

                </li>
                <li>
                    <div className={classes.actbutton}><a href=''> <i className='bx bx-message-square-dots'
                                                                      size='lg'> </i></a></div>

                </li>
                <li>
                    <div className={classes.actbutton}><a href=''> <i className='bx bx-plus' size='lg'>
                        <span>Add Friend </span></i> </a></div>

                </li>

            </ul>


        </div>
    )
}

export default UserInfo