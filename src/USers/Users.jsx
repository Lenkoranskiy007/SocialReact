import React from 'react'
import classes from  './Users.module.css'
import * as axios from 'axios';
import usersPhoto from '../photo/108180118-user-vector-icon-isolated-on-transparent-background-user-logo-concept.jpg'

export const Users = (props) => {

    if(props.users.length === 0) {
       axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
           props.setUsers(response.data.items)
       })
   }


    return (
        <div>
            {

                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                         <img  src={u.photos.small != null ? u.photos.small : usersPhoto}  className={classes.userPhoto} />
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