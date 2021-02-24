import React from 'react'
import classes from "./Users.module.css";
import usersPhoto from "../photo/108180118-user-vector-icon-isolated-on-transparent-background-user-logo-concept.jpg";
import {NavLink} from "react-router-dom";


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
                                ? <button onClick={() => {props.unFollow(u.id)}}> Unfollow</button>
                                : <button onClick={() => {props.follow(u.id)}}> Follow</button>
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