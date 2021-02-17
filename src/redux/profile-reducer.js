let ADD_POST = 'ADD-POST'
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {

    posts: [
        {id: 1, message: 'How are you', likesCount: '15'},
        {id: 2, message: "It's my first project men", likesCount: '20'}
    ],
    newPostText: 'Just do it'

}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case  ADD_POST: {
            let copyState = {...state}
            let newPost = {id: 4, message: state.newPostText, likesCount: "0"}
            copyState.posts = [...state.posts]
            copyState.posts.push(newPost)
            copyState.newPostText = ''
            return copyState
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}

            stateCopy.newPostText = action.newText
            return stateCopy
        }
        default: {
            return state
        }
    }
}


export const addPostActionCreator = () => {
    return {type: ADD_POST}
}

export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}