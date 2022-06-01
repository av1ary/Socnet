import React from 'react';
import classes from './Nav.module.css';

const Nav = () => {
    return(
    <nav className={classes.nav}>

        <div className={classes.menu}>
            <ul>
                <li className={classes.navbottom}>
                    <a href="">
                        <i className='bx bx-news'> <span> Newsfeed</span></i></a>
                </li>
                <li className={classes.navbottom}>
                    <a href="">
                        <i className='bx bxs-color'> <span> Stories</span> </i>
                    </a>
                </li>
                <li className={classes.navbottom}>
                    <a href="">
                        <i className='bx bx-group'> <span>Groups</span> </i>
                    </a>
                </li>
                <li className={classes.navbottom}>
                    <a href="">
                        <i className='bx bx-tv'><span> Streams</span></i>
                    </a>
                </li>
                <li className={classes.navbottom}>
                    <a href="">
                        <i className='bx bx-game'><span> Games</span> </i>
                    </a>
                </li>

                </ul>

        </div>

        <div className={classes.menu}>
            <ul>
                <li className={classes.navbottom}>
                    <a href="">
                        <i className='bx bx-user'><span> My profile</span> </i>

                    </a>
                </li>
                <li className={classes.navbottom}>
                    <a href="">
                        <i className='bx bx-message-square-dots'> <span> Messages</span></i>

                    </a>
                </li>
                <li className={classes.navbottom}>
                    <a href="">
                        <i className='bx bx-wrench'><span> Settings</span></i>
                    </a>
                </li>
            </ul>

        </div>





    </nav>
    )
}

export default Nav
