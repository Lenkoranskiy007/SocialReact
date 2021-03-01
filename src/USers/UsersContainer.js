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
import {getUsers, usersAPI} from "../Api/Api";



class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetchingAC(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize ).then(data => {
                this.props.toggleIsFetchingAC(false)
                this.props.setUsersAC(data.items)
                this.props.setTotalCountAC(data.totalCount)
            })

    }

    onPageChanged =  (pageNumber) => {

        this.props.setCurrentPageAC(pageNumber)
        this.props.toggleIsFetchingAC(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetchingAC(false)
            this.props.setUsersAC(data.items)
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