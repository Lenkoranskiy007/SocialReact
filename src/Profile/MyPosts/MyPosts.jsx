import React from 'react'
import {Post} from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profile-reducer";





export const MyPosts = (props) => {

    let newPostElement  = React.createRef()

    let addPost = () => {

        props.dispatch(addPostActionCreator())
    }

    let postsElements = props.profilePage.posts.map((post) => {
        return <Post id={post.id} message={post.message} likesCount={post.likesCount}/>
    })

    let onChangePost = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(text))

    }

    return (
        <div>
            <div>My posts</div>
            <textarea value={props.profilePage.newPostText} onChange={onChangePost} ref={newPostElement} ></textarea>
            <button onClick={addPost}>Add post</button>
            {postsElements}
        </div>
    )
}