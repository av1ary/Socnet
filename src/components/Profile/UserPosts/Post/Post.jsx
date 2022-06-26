import React from 'react';
import classes from './Post.module.css';
import Comments from "./Comments/Comments";

const Post = (props) => {

    console.log(props.text)

    return (
        <div className={classes.post}>


            <img className={classes.avatar}
                 src="https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=1024"/>
            <div className={classes.username}><a href=''>Robin Hood</a></div>

            <div> {props.text} </div>

            <a className={classes.actbutton}><i className='bx bx-heart'></i> <span>Like</span></a>
            <a className={classes.actbutton}><i className='bx bx-repost'></i> <span>Repost</span></a>
            <Comments/>


        </div>
    )
}

export default Post