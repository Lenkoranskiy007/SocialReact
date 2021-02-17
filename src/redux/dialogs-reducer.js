let ADD_MESSAGE = 'ADD-MESSAGE'
let UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: 'Farid'},
        {id: 2, name: 'Sudjaat'},
        {id: 3, name: 'Rufat'},
        {id: 4, name: 'Adam'},
        {id: 5, name: 'Tamerlam'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How do you do?'},
        {id: 3, message: "It's my first project men!"}
    ],
    newMessageText: 'Hi bro'

}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let copyState = {...state}
            let newMessage = {id: 4, message: state.newMessageText}
            copyState.messages = [...state.messages]
            copyState.messages.push(newMessage)
            copyState.newMessageText = ''
            return copyState
        }
        case UPDATE_NEW_MESSAGE: {
            let stateCopy = {...state}
            stateCopy.newMessageText = action.messageText
            return stateCopy
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
