import React from 'react'
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";





export const MyPosts = (props) => {

    let newPostElement  = React.createRef()

    let addPost = () => {
        debugger
        props.addPost()
    }

    let postsElements = props.posts.map((post) => {
        return <Post id={post.id} message={post.message} likesCount={post.likesCount}/>
    })

    let onChangePost = () => {
        let newText = newPostElement.current.value
        props.updateNewPostText(newText)
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