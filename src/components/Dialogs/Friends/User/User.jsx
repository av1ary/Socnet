import React from 'react';
import classes from './User.module.css';
import {NavLink} from "react-router-dom"


const User = (props) => {
    console.log(props.username)
    console.log(props.lastmes)
    console.log(props.id)
    let path = "/messages/" + props.id;
    return (
        <NavLink to={path}>

            <div className={classes.User}>

                <img className={classes.UserAva}
                     src="https://m.media-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_.jpg"/>
                <div className={classes.username}> {props.username} </div>
                <div className={classes.lastmes}> {props.lastmes} </div>


            </div>
        </NavLink>

    )
}

export default User