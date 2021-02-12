import React from 'react'
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";





export const MyPosts = (props) => {

    let newPostElement  = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
    }

    let postsElements = props.posts.map((post) => {
        return <Post id={post.id} message={post.message} likesCount={post.likesCount}/>
    })

    return (
        <div>
            <div>My posts</div>
            <textarea ref={newPostElement}></textarea>
            <button onClick={addPost}>Add post</button>
            {postsElements}
        </div>
    )
}