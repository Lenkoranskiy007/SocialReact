import React from 'react'


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
            ]
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
    _callSubscriber(){
        console.log('state rendered')
    },
    addPost () {
        let newPost = {id: 4, message: this._state.profilePage.newPostText, likesCount: "0"}
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
   updateNewPostText (newText){
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscriber(observer) {
        this._callSubscriber = observer
    },


}

