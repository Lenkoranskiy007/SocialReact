import React from 'react'
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

let postData = [
    {id: 1, message: 'How are you', likesCount: '15'},
    {id: 2, message: "It's my first project men", likesCount: '20'}
]

let postsElements = postData.map((post) => {
    return <Post id={post.id} message={post.message} likesCount={post.likesCount}/>
})

export const MyPosts = () => {
    return (
        <div>
            <div>My posts</div>
            <textarea ></textarea>
            <button>Add post</button>
            {postsElements}
        </div>
    )
}