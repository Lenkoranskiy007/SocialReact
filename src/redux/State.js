import React from 'react'

let rerenderEntireTree = () => {
    console.log('state rendered')
}

export const state = {

    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Farid'},
            {id: 2, name: 'Sudjaat'},
            {id: 3, name: 'Rufat'},
            {id: 4, name: 'Adam'},
            {id: 5, name: 'Tamerlam'}
        ],
        messages:[
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How do you do?'},
            {id: 3, message: "It's my first project men!"}
        ]
    },
    profilePage: {
        posts:[
            {id: 1, message: 'How are you', likesCount: '15'},
            {id: 2, message: "It's my first project men", likesCount: '20'}
        ],
        newPostText: 'Just do it'
    }


}

export const addPost = () => {
    let newPost = {id: 4, message: state.profilePage.newPostText, likesCount: '25'}
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const subscriber = (observer) => {
    rerenderEntireTree = observer
}