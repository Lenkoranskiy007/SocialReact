import React from 'react'
import {Profile} from "./Profile";
import {setUserProfileActionCreator} from "../redux/profile-reducer";
import * as axios from "axios";
import {connect} from "react-redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
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





let ProfilesContainer = connect(mapStateToProps, {setUserProfileActionCreator})(ProfileContainer)
export default ProfilesContainer