import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Friends from "./Friends/Friends";


const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <Dialog/>
            <Friends/>
        </div>
    )
}

export default Dialogs