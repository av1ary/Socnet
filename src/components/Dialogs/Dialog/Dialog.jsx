import React from 'react';
import classes from './Dialog.module.css';
import Message from "./Message/Message";
import Dialogbar from "./Dialogbar/dialogbar";


const Dialogs = (props) => {
    console.log(props.messagedata)

    let ShowMess=props.messagedata.map(onemes=><Message message={onemes.message}/>)

    return (
        <div className={classes.Dialog}>

            <div className={classes.Dialogarea}>
                <Dialogbar/>
                {ShowMess}
            </div>

        </div>
    )
}

export default Dialogs