import React from 'react'
import classes from "./Users.module.css";
import usersPhoto from "../photo/108180118-user-vector-icon-isolated-on-transparent-background-user-logo-concept.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


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
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'b6a2753a-cce4-4557-b52f-9156d221ff98'
                                        }
                                    }).then(res => {
                                        if(res.data.resultCode === 0 ) {
                                            props.unfollow(u.id)
                                        }
                                    })}}

                                > Unfollow</button>

                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'b6a2753a-cce4-4557-b52f-9156d221ff98'
                                        }
                                    }).then(res => {
                                        if(res.data.resultCode === 0 ) {
                                            props.follow(u.id)
                                        }
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