import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Friends from "./Friends/Friends";


const Dialogs = (props) => {

    console.log(props.dialogs)

    return (
        <div className={classes.dialogs}>
            <Dialog messagedata={props.dialogs.messagedata}/>
            <Friends dialogFriends={props.dialogs.dialogFriends}/>
        </div>
    )
}

export default Dialogs