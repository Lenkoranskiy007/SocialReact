import React from 'react'
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";





export const MyPosts = (props) => {

    let newPostElement  = React.createRef()

    let addPost = () => {
        // debugger
        // props.addPost()
        let action = {type: 'ADD-POST'}
        props.dispatch(action)
    }

    let postsElements = props.posts.map((post) => {
        return <Post id={post.id} message={post.message} likesCount={post.likesCount}/>
    })

    let onChangePost = () => {
        let text = newPostElement.current.value
        // props.updateNewPostText(newText)
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text}
        props.dispatch(action)

    }

    return (
        <div>
            <div>My posts</div>
            <textarea value={props.newPostText} onChange={onChangePost} ref={newPostElement} ></textarea>
            <button onClick={addPost}>Add post</button>
            {postsElements}
        </div>
    )
}