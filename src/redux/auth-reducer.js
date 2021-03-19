import {authAPI, usersAPI} from "../Api/Api";

const SET_USER_DATA =  'SET_USER_DATA '

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return{
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default :
            return state
    }
}


export const setUserDataActionCreator = (userId, email, login, isAuth ) => {
    return {type: SET_USER_DATA, data: {userId, email, login , isAuth}}
}


export const loginTC = () => (dispatch) => {
      return  authAPI.me().then(response => {
            if (response.data.resultCode  === 0 ) {
                let {id, email, login} = response.data.data
                dispatch(setUserDataActionCreator(id, email, login, true))
            }
        })

}
export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe,true).then(response => {
            if (response.data.resultCode  === 0 ) {
                dispatch(setUserDataActionCreator())
            }
        })
    }
}

export const logoutTC = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode  === 0 ) {
                dispatch(setUserDataActionCreator(null, null, null, false))
            }
        })
    }
}




