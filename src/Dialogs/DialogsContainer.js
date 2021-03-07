import React from 'react'
import {addMessageActionCreator, updateNewMessageActionCreator} from "../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";


// export const DialogsContainer = (props) => {
//     let addMessage = () => {
//         props.dispatch(addMessageActionCreator())
//
//     }
//
//     let onChangeMessage = (messageText) => {
//         let action = updateNewMessageActionCreator(messageText)
//         props.dispatch(action)
//
//     }
//
//     return(
//         <Dialogs
//             onChangeMessage={onChangeMessage}
//             onSendMessage={addMessage}
//             dialogsPage={props.dialogsPage} />
//     )
// }

const mapStateToProps  = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onChangeMessage: (messageText) => {
            let action = updateNewMessageActionCreator(messageText)
            dispatch(action)
        }
    }
}





let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer

