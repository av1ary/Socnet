import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={classes.nav}>

            <div className={classes.menu}>
                <ul>
                    <li className={classes.navbottom}>
                        <NavLink to="/newsfeed">
                            <i className='bx bx-news'> <span> Newsfeed</span></i>
                        </NavLink>
                    </li>
                    <li className={classes.navbottom}>
                        <NavLink to="/stories">
                            <i className='bx bxs-color'> <span> Stories</span></i>
                        </NavLink>
                    </li>


                    <li className={classes.navbottom}>
                        <NavLink to="/groups">
                            <i className='bx bx-group'> <span> Groups</span></i>
                        </NavLink>
                    </li>

                    <li className={classes.navbottom}>
                        <NavLink to="/streams">
                            <i className='bx bx-tv'> <span> Streams</span></i>
                        </NavLink>
                    </li>
                    <li className={classes.navbottom}>
                        <NavLink to="/games">
                            <i className='bx bx-game'> <span> Games</span></i>
                        </NavLink>
                    </li>

                </ul>

            </div>

            <div className={classes.menu}>
                <ul>
                    <li className={classes.navbottom}>
                        <NavLink to="/profile">
                            <i className='bx bx-user'><span> My profile</span> </i>

                        </NavLink>
                    </li>
                    <li className={classes.navbottom}>
                        <NavLink to="/messages">
                            <i className='bx bx-message-square-dots'> <span> Messages</span></i>

                        </NavLink>
                    </li>
                    <li className={classes.navbottom}>
                        <NavLink to="/settings">
                            <i className='bx bx-wrench'><span> Settings</span></i>
                        </NavLink>
                    </li>
                </ul>

            </div>


        </nav>
    )
}

export default Nav
