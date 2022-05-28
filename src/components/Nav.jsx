import React from 'react';
import classes from './Nav.module.css';

const Nav = () => {
    return(
    <nav className={classes.nav}>
        <div className={classes.menu}>
            Society
            <div className={classes.navbottom}>
                <a>Newsfeed</a>
            </div>
            <div className={classes.navbottom}>
                <a>Explore Stories</a>
            </div>
            <div className={classes.navbottom}>
                <a>Popular Groups</a>
            </div>

            <div className={classes.navbottom}>
                <a>Streams</a>
            </div>
            <div className={classes.navbottom}>
                <a>Games</a>
            </div>

        </div>

        <div className={classes.menu}>
            <div>Accont</div>
            <div className={classes.navbottom}>
                <a>My Profile</a>
            </div>
            <div className={classes.navbottom}>
                <a>Messages</a>
            </div>
            <div className={classes.navbottom}>
                <a>Settings</a>
            </div>
        </div>




    </nav> )
}

export default Nav
