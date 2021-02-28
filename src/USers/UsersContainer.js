import React from 'react'
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unFollowAC
} from "../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import preloader from '../photo/preloader.gif'



class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetchingAC(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
                withCredentials: true
            }).then(response => {
                this.props.toggleIsFetchingAC(false)
                this.props.setUsersAC(response.data.items)
                this.props.setTotalCountAC(response.data.totalCount)
            })

    }

    onPageChanged =  (pageNumber) => {

        this.props.setCurrentPageAC(pageNumber)
        this.props.toggleIsFetchingAC(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true
        }).then(response => {
            this.props.toggleIsFetchingAC(false)
            this.props.setUsersAC(response.data.items)
        })
    }

    render() {

        let pagesCount = Math.ceil( this.props.totalCount / 400)
        let pages = []
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <>
            {this.props.isFetching? <img src={preloader}/>: null}
         <Users
            onPageChanged={this.onPageChanged}
            totalCount={this.props.totalCount}
            currentPage={this.props.currentPage}
            users={ this.props.users}
            follow={this.props.followAC}
            unfollow={this.props.unFollowAC}
        />
        </>
    }
}





let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}





const UsersContainer = connect(mapStateToProps, {followAC,unFollowAC,setUsersAC,setCurrentPageAC,setTotalCountAC,toggleIsFetchingAC})(UsersAPIComponent)
export default UsersContainer