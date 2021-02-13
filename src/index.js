import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, state, subscriber, updateNewPostText} from "./redux/State";
import './index.css';;


let rerenderEntireTree = (state) => {
    ReactDOM.render(
    <BrowserRouter>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} newPostText={state.profilePage.newPostText}/>
    </BrowserRouter>,
    document.getElementById('root'));}

rerenderEntireTree(state)

subscriber(rerenderEntireTree)