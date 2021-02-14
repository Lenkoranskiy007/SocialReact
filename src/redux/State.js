import React from 'react'

let ADD_POST ='ADD-POST'
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
let ADD_MESSAGE = 'ADD-MESSAGE'
let UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

export let store = {
    _state: {
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
            ],
            newMessageText: 'Hi bro'
        },
        profilePage: {
            posts:[
                {id: 1, message: 'How are you', likesCount: '15'},
                {id: 2, message: "It's my first project men", likesCount: '20'}
            ],
            newPostText: 'Just do it'
        }
    },
    getState() {
     return this._state
    },

    subscriber(observer) {
        this._callSubscriber = observer
    },
    _callSubscriber(){
        console.log('state rendered')
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {id: 4, message: this._state.profilePage.newPostText, likesCount: "0"}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === ADD_MESSAGE ) {
            let newMessage = {id: 4, message: this._state.dialogsPage.newMessageText}
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE) {
            this._state.dialogsPage.newMessageText = action.messageText
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator  = () => {
    return {type: ADD_POST}
}

export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE}
}

export const updateNewMessageActionCreator = (messageText) => {
    return {type: UPDATE_NEW_MESSAGE, messageText: messageText}
}

