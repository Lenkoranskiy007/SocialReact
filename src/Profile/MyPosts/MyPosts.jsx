import React from 'react'
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

let postData = [
    {id: 1, message: 'How are you', likesCount: '15'},
    {id: 2, message: "It's my first project men", likesCount: '20'}
]

export const MyPosts = () => {
    return (
        <div>
            <div>My posts</div>
            <textarea ></textarea>
            <button>Add post</button>
            <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
            <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
        </div>
    )
}