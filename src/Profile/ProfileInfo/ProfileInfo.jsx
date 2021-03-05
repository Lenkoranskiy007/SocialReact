import React from 'react'
import classes from "../Profile.module.css";
import preloader from '../../photo/preloader.gif'

export const ProfileInfo = (props) => {

    if(!props.profile) {
       return  <img src={preloader}/>
    }


    return (
        <div >
            <div>
                <img src="https://www.nultylighting.co.uk/wp-content/uploads/2012/10/retail-store-sport-red-light-tunnel-consultant-nulty-banner-1920x1080.jpg" alt=""/>

                <div>
                    <img src={props.profile.photos.large} alt=""/>
                    ava + description
                </div>
            </div>
        </div>
    )
}