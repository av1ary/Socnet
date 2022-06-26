import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
    <header className={classes.header}>
        <img className={classes.logo} src='logo.png'/>
        <img className={classes.apid} src='apid.png'/>
        <input type="text" placeholder="Search"  className={classes.MainSearch}/>

    </header>
    )
}

export default Header
