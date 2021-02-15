let ADD_MESSAGE = 'ADD-MESSAGE'
let UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'



export const dialogsReducer = (state, action) => {
    switch(action.type) {
        case ADD_MESSAGE: {
        let newMessage = {id: 4, message: state.newMessageText}
        state.messages.push(newMessage)
        state.newMessageText = ''
        return state
        }
        case UPDATE_NEW_MESSAGE: {
        state.newMessageText = action.messageText
        return state
        }
        default: {
            return state
        }
}
}

export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE}
}

export const updateNewMessageActionCreator = (messageText) => {
    return {type: UPDATE_NEW_MESSAGE, messageText: messageText}
}
