let ADD_POST ='ADD-POST'
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
            let newPost = {id: 4, message: state.newPostText, likesCount: "0"}
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText
            return state
        }
        default: {
            return state
        }
    }
}


export const addPostActionCreator  = () => {
    return {type: ADD_POST}
}

export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}