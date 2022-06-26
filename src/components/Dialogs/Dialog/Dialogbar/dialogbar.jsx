import React from 'react';
import classes from './Dialogbar.module.css';


const Dialogbar = (props) => {
  return (
        <div className={classes.Dialogbar}>
            <div className={classes.friendstatus}>Online</div>
            <div className={classes.friendinfo}>Johny Deep</div>
            <input type="text" placeholder="Search"  className={classes.messearch}/>

        </div>
    )
}

export default Dialogbar