let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_USERS = 'SET_USERS'
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
let SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'


let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 5
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
            return  {...state, users: action.users}
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalCount: action.count}
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

export const setCurrentPageAC = (currentPage) => {
    return {type:SET_CURRENT_PAGE, currentPage }
}

export const setTotalCountAC = (totalCount) => {
    return {type:SET_TOTAL_COUNT, count: totalCount }
}

