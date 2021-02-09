import React from 'react'
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {Post} from "./MyPosts/Post/Post";

export const Profile = () => {
    return <div className={classes.content}>
        <div>
        <img src="https://www.nultylighting.co.uk/wp-content/uploads/2012/10/retail-store-sport-red-light-tunnel-consultant-nulty-banner-1920x1080.jpg" alt=""/>
    <div>
        ava + description
    </div>
        <MyPosts/>
        <Post message='How are You?' likesCount='10'/>
        <Post message="It's my first project men" likesCount='15'/>
        </div>
    </div>

}