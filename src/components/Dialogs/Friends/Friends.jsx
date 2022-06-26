import React from 'react';
import classes from './Friends.module.css';
import User from "./User/User";
import dialog from "../Dialog/Dialog";

const Dialogs = (props) => {

    console.log(props.dialogFriends)
    let FriendsDialogsList = props.dialogFriends.map(friend=><User name={friend.name} lastmes={friend.lastmes}/>)

    return (
        <div className={classes.friends}>
            {FriendsDialogsList}
        </div>
    )
}

export default Dialogs