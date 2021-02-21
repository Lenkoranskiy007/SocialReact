let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_USERS = 'SET_USERS'


let initialState = {
    users: [
        // {id: 1, photoUrl: 'https://www.kindpng.com/picc/m/81-814437_logo-linkedin-png-rond-transparent-png.png', followed: false, fullName: 'Farid', status: 'I am a boss', location: {city: 'Moscow', country: 'Russia'}},
        // {id: 2, photoUrl: 'https://www.kindpng.com/picc/m/81-814437_logo-linkedin-png-rond-transparent-png.png', followed: true, fullName: 'Tamik', status: 'I am a Tamik', location: {city: 'Grozny', country: 'Russia'}},
        // {id: 3, photoUrl: 'https://www.kindpng.com/picc/m/81-814437_logo-linkedin-png-rond-transparent-png.png' , followed: false,fullName: 'Adam', status: 'I am a Adam', location: {city: 'Moscow', country: 'Russia'}}
    ]
}


export const usersReducer = (state = initialState, action ) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u

                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u

                })
            }
        case  SET_USERS: {
            return  {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }

}

export const followAC = (userId) => {
    return {type: FOLLOW, userId}
}

export const unFollowAC = (userId) => {
    return {type: UNFOLLOW, userId}
}

export const setUsersAC = (users) => {
    return {type: SET_USERS, users}
}


