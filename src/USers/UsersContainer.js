import React from 'react'
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC} from "../redux/users-reducer";
import User from "./User";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }

}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(User)
export default UsersContainer