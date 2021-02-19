import React from 'react'
import classes from  './Users.module.css'

export const Users = (props) => {

    if(props.users.length === 0 ) {
        props.setUsers(  [
            {id: 1, photoUrl: 'https://www.kindpng.com/picc/m/81-814437_logo-linkedin-png-rond-transparent-png.png', followed: false, fullName: 'Farid', status: 'I am a boss', location: {city: 'Moscow', country: 'Russia'}},
            {id: 2, photoUrl: 'https://www.kindpng.com/picc/m/81-814437_logo-linkedin-png-rond-transparent-png.png', followed: true, fullName: 'Tamik', status: 'I am a Tamik', location: {city: 'Grozny', country: 'Russia'}},
            {id: 3, photoUrl: 'https://www.kindpng.com/picc/m/81-814437_logo-linkedin-png-rond-transparent-png.png' , followed: false,fullName: 'Adam', status: 'I am a Adam', location: {city: 'Moscow', country: 'Russia'}}
        ])
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                         <img className={classes.userPhoto} src={u.photoUrl} />
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
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                        <span>

                    </span>
                    </span>


                </div>

                )
            }
        </div>
    )
}