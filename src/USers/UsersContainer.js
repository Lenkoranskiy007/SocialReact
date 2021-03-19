import React from 'react'
import {connect} from "react-redux";
import {
    followAC, followSuccesAC, followSuccessAC, followTC, getUsersTC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    toggleIsFetchingAC, toggleIsFollowingProgress,
    unFollowAC, unFollowSuccessAC, unfollowTC
} from "../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import preloader from '../photo/preloader.gif'
import { usersAPI} from "../Api/Api";
import {Preloader} from "../logo/Preloader";



class UsersAPIComponent extends React.Component {

    componentDidMount() {

        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
        // this.props.toggleIsFetchingAC(true)
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize ).then(data => {
        //         this.props.toggleIsFetchingAC(false)
        //         this.props.setUsersAC(data.items)
        //         this.props.setTotalCountAC(data.totalCount)
        //     })

    }

    onPageChanged =  (pageNumber) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize)

    }

    render() {

        let pagesCount = Math.ceil( this.props.totalCount / 400)
        let pages = []
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <>
            {this.props.isFetching? <Preloader/>: null}
         <Users
            onPageChanged={this.onPageChanged}
            totalCount={this.props.totalCount}
            currentPage={this.props.currentPage}
            users={ this.props.users}
            followTC={this.props.followTC}
            unfollowTC={this.props.unfollowTC}
            followingInProgress={this.props.followingInProgress}
            toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}





const UsersContainer = connect(mapStateToProps, {followTC,unfollowTC,setUsersAC,
    setCurrentPageAC,setTotalCountAC,
    toggleIsFetchingAC, toggleIsFollowingProgress,
    getUsersTC
})(UsersAPIComponent)
export default UsersContainer