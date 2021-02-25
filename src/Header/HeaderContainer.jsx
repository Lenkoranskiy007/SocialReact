import React from 'react'
import {connect} from "react-redux";
import {setUserDataActionCreator} from "../redux/auth-reducer";
import * as axios from "axios";
import {Header} from "./Header";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me` , {withCredentials: true }).then(response => {
            if (response.data.resultCode  === 0 ) {
                let {id, email, login} = response.data.data
                this.props.setUserDataActionCreator(id, email, login)
            }

        })
    }

    render() {
    return <Header  {...this.props} login={this.props.login} isAuth={this.props.isAuth}/>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

let HeadersContainer = connect(mapStateToProps, {setUserDataActionCreator})(HeaderContainer)
export default HeadersContainer
