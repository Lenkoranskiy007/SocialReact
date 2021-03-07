import React from 'react'
import {Profile} from "./Profile";
import {getProfileTC, setUserProfileActionCreator} from "../redux/profile-reducer";
import * as axios from "axios";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router";

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

    }

    render() {
        if(!this.props.isAuth ) {
            return  <Redirect to={'/login'}/>
        }

        return (
            <Profile  {...this.props}  profile={this.props.profile}/>
        )

    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)



let ProfilesContainer = connect(mapStateToProps, { getProfileTC})(WithUrlDataContainerComponent)
export default ProfilesContainer