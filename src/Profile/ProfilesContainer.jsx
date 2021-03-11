import React from 'react'
import {Profile} from "./Profile";
import {getProfileTC, getStatusTC, setUserProfileActionCreator, updateStatusTC} from "../redux/profile-reducer";
import * as axios from "axios";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router";
import {withAuthRedirect} from "../hoc/withAutthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId

        if(!userId) {
            userId = 2
        }
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
        //     this.props.setUserProfileActionCreator(response.data)
        // })
        this.props.getProfileTC(userId)
        this.props.getStatusTC(userId)

    }

    render() {

        return (
            <Profile  {...this.props}  profile={this.props.profile} status={this.props.status} updateStatusTC={this.props.updateStatusTC}/>
        )

    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, { getProfileTC, getStatusTC, updateStatusTC}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)