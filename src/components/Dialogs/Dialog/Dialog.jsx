import React from 'react';
import classes from './Dialog.module.css';
import Message from "./Message/Message";


const Dialogs = (props) => {
    let messagedata =[
        {id:1, message:'Hello'},
        {id:2, message:'About me ex'},
        {id:3, message:'We did it bro'}
    ]
    return (
        <div className={classes.Dialog}>
            <Message message={messagedata[0].message}/>
            <Message message={messagedata[1].message}/>
            <Message message={messagedata[2].message}/>
        </div>
    )
}

export default Dialogs