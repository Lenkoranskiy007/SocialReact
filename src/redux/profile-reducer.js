import * as axios from "axios";
import {profileAPI, usersAPI} from "../Api/Api";

let ADD_POST = 'ADD-POST'
// let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
let SET_USER_PROFILE = 'SET_USER_PROFILE'
let SET_STATUS = ' SET_STATUS'

let initialState = {
    posts: [
        {id: 1, message: 'How are you', likesCount: '15'},
        {id: 2, message: "It's my first project men", likesCount: '20'}
    ],
    newPostText: 'Just do it',
    profile: null,
    status: ''

}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case  ADD_POST: {
            let copyState = {...state}
            let newPost = {id: 4, message:action.newPostText, likesCount: "0"}
            copyState.posts = [...state.posts]
            copyState.posts.push(newPost)
            copyState.newPostText = ''
            return copyState
        }
        // case UPDATE_NEW_POST_TEXT: {
        //     let stateCopy = {...state}
        //
        //     stateCopy.newPostText = action.newText
        //     return stateCopy
        // }
        case SET_USER_PROFILE: {
            let copyState = {...state}
            copyState.profile = action.profile
            return copyState
        }
        case SET_STATUS: {
            // return {
            //     ...state,
            //     status: action.status
            // }
            let stateCopy = {...state}
            stateCopy.status = action.status
            return stateCopy
        }

        default: {
            return state
        }
    }
}


export const addPostActionCreator = (newPostText) => {
    return {type: ADD_POST, newPostText}
}
//
// export const updateNewPostTextActionCreator = (text) => {
//     return {type: UPDATE_NEW_POST_TEXT, newText: text}
// }

export const setUserProfileActionCreator = (profile) => {
    return {type: SET_USER_PROFILE, profile}
}

export const setStatusActionCreator = (status) => {
    return {type: SET_STATUS, status}
}


export  const getProfileTC = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfileActionCreator(response.data))
        })
    }
}



export const getStatusTC = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatusActionCreator(response.data))
        })
    }
}

export const updateStatusTC = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {

            if(response.data.resultCode === 0 ) {
            dispatch(setStatusActionCreator(status))
        }})
    }
}