import React from 'react'
import classes from "./Users.module.css";
import usersPhoto from "../photo/108180118-user-vector-icon-isolated-on-transparent-background-user-logo-concept.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../Api/Api";


 const Users = (props) => {


    let pagesCount = Math.ceil( props.totalCount / 400)

    let pages = []
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {
                    pages.map(p => {
                        return  <span  className={props.currentPage === p && classes.selectedPage}
                                       onClick={() => { props.onPageChanged(p)}}

                        >{p}</span>
                    })}

            </div>
            {

                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img  src={u.photos.small != null ? u.photos.small : usersPhoto}  className={classes.userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleIsFollowingProgress(true, u.id)
                                    usersAPI.unfollow(u.id).then(data => {
                                        if(data.resultCode === 0 ) {
                                            props.unfollow(u.id, u.id)
                                        }
                                        props.toggleIsFollowingProgress(false)
                                    })}}
                                > Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleIsFollowingProgress(true, u.id)
                                    usersAPI.follow(u.id).then(data => {
                                        if(data.resultCode === 0 ) {
                                            props.follow(u.id)
                                        }
                                        props.toggleIsFollowingProgress(false, u.id)
                                    })
                                }}> Follow</button>
                            }

                    </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                        <span>

                    </span>
                    </span>


                    </div>

                )
            }
        </div>
    )

}

export default Users