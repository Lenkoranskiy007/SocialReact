import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import { store} from "./redux/State";
import './index.css';;


let rerenderEntireTree = (state) => {
    ReactDOM.render(
    <BrowserRouter>
        <App state={ state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} newPostText={store.getState().profilePage.newPostText}/>
    </BrowserRouter>,
    document.getElementById('root'));}

rerenderEntireTree(store.getState())

store.subscriber(rerenderEntireTree)