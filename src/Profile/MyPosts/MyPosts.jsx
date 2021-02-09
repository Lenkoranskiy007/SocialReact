import React from 'react'
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <div>My posts</div>
            <textarea ></textarea>
            <button>Add post</button>
            <Post message='How are You?' likesCount='10'/>
            <Post message="It's my first project men" likesCount='15'/>
        </div>
    )
}