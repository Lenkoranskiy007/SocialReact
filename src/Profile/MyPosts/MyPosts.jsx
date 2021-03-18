import React from 'react'
import {Post} from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profile-reducer";
import {useFormik} from "formik";
import {Button, TextField} from "@material-ui/core";





export const MyPosts = (props) => {

    console.log(props.profilePage.posts)
    let newPostElement  = React.createRef()

    let addPost = () => {
        props.addPost()
    }

    let postsElements = props.profilePage.posts.map((post) => {
        return <Post id={post.id} message={post.message} likesCount={post.likesCount}/>
    })

    let onChangePost = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return <div>
            <div>My posts</div>
            <textarea value={props.profilePage.newPostText} onChange={onChangePost} ref={newPostElement} ></textarea>
            <button onClick={addPost}>Add post</button>
            {postsElements}
        </div>

}












//
// const AddPostForm = (props) => {
//
//     const formik = useFormik({
//         initialValues: {
//             email: '',
//             password: '',
//             rememberMe: false,
//             addPost: ''
//         },
//         validate: (values) => {
//             const errors = {};
//             if (!values.addPost) {
//                 errors.addPost = 'Required!';
//             } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.addPost)) {
//                 errors.addPost = '';
//             }
//             return errors;
//         },
//         onSubmit: values => {
//             props.addPost(values.addPost)
//         },
//     })
//
//
//
//     return (
//         <form onSubmit={formik.handleSubmit}>
//             <div>My posts</div>
//             <div>
//                 <TextField onChange={formik.handleChange}  name='addPost' />
//                 <Button type={'submit'} variant={'contained'} color={'secondary'}>Add post</Button>
//             </div>
//             {formik.errors.addPost ? <div style={{color: "red"}}>{formik.errors.addPost}</div>: null }
//             {props.postElements}
//
//         </form>
//     )
// }