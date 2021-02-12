import React from 'react'
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";





export const MyPosts = (props) => {
    let postsElements = props.posts.map((post) => {
        return <Post id={post.id} message={post.message} likesCount={post.likesCount}/>
    })

    return (
        <div>
            <div>My posts</div>
            <textarea ></textarea>
            <button>Add post</button>
            {postsElements}
        </div>
    )
}