import React from 'react'
import {Profile} from "./Profile";
import {setUserProfileActionCreator} from "../redux/profile-reducer";
import * as axios from "axios";
import {connect} from "react-redux";
import {withRouter} from "react-router";

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId

        if(!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            debugger
            this.props.setUserProfileActionCreator(response.data)
        })
    }

    render() {
        return (
            <Profile  {...this.props}  profile={this.props.profile}/>
        )

    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)



let ProfilesContainer = connect(mapStateToProps, {setUserProfileActionCreator})(WithUrlDataContainerComponent)
export default ProfilesContainer