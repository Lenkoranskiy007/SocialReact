import React from 'react'
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unFollowAC} from "../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";



class UsersAPIComponent extends React.Component {

    componentDidMount() {
        if(this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
        }
    }

    onPageChanged =  (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pagesCount = Math.ceil( this.props.totalCount / 400)
        let pages = []
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <Users

            onPageChanged={this.onPageChanged}
            totalCount={this.props.totalCount}
            currentPage={this.props.currentPage}
            users={ this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unFollow}
        />

    }
}





let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalCount: (count) => {
            dispatch(setTotalCountAC(count))
        }

    }

}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
export default UsersContainer