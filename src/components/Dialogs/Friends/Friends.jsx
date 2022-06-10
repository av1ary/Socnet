import React from 'react';
import classes from './Friends.module.css';
import User from "./User/User";





const Dialogs = (props) => {
    let dialogFriends = [
        {id: '00001', name:'Johny Depp', lastmes:'We did it, bro'},
        {id: '00002', name:'Ivan Moscow', lastmes:'It is my fake acc!'},
        {id: '00003', name:'Jack London', lastmes:'Why you ignore me?'},
        {id: '00004', name:'Eden Azar', lastmes:'I won UCL, but not in blue:('},
        {id: '00005', name:'Shigeo Katsu', lastmes:'I wish you graduate'},
        {id: '00006', name:'Andrew Murphy', lastmes:'Let us watch film'},
        {id: '00007', name:'Genady Golovkin', lastmes:'You: ur the goat boxer'}
    ]


    return (
        <div className={classes.friends}>
            <User username={dialogFriends[0].name} lastmes={dialogFriends[0].lastmes} id={dialogFriends[0].id}/>
            <User username={dialogFriends[1].name} lastmes={dialogFriends[1].lastmes} id={dialogFriends[1].id}/>
            <User username={dialogFriends[2].name} lastmes={dialogFriends[2].lastmes} id={dialogFriends[2].id}/>
            <User username={dialogFriends[3].name} lastmes={dialogFriends[3].lastmes} id={dialogFriends[3].id}/>
            <User username={dialogFriends[4].name} lastmes={dialogFriends[4].lastmes} id={dialogFriends[4].id}/>
            <User username={dialogFriends[5].name} lastmes={dialogFriends[5].lastmes} id={dialogFriends[5].id}/>
            <User username={dialogFriends[6].name} lastmes={dialogFriends[6].lastmes} id={dialogFriends[6].id}/>
        </div>
    )
}

export default Dialogs