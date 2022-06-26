import React from 'react';
import classes from './CreatePost.module.css';


const CreatePost = () => {
    let NewPostText = React.createRef();
    let addPost = () => {
        let text = NewPostText.current.value;
        alert(text)
    }
        return (
        <div className={classes.CreatePost}>
            <div>Create New Post</div>
            <div className={classes.divofinput}>
                <textarea ref={NewPostText} className={classes.NewPostTextArea}> </textarea>
            </div>
            <button onClick={addPost} className={classes.postbutton}>Post</button>


        </div>
    )
}

export default CreatePost