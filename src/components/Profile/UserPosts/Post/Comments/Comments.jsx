import React from 'react';
import classes from './Post.module.css';

const Post = () => {
    return (
        <div className={classes.post}>
                <img className={classes.avatar} src="https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=1024"/>
            text text text
            <a><i className='bx bx-heart'></i> <span>Like</span></a>

            <a><i className='bx bx-repost'></i> <span>Repost</span></a>



        </div>
    )
}

export default Post