import React from 'react'
import classes from "../Profile.module.css";
import preloader from '../../photo/preloader.gif'
import ProfileStatus from "./ProfileStatus";
import {updateStatusTC} from "../../redux/profile-reducer";
import ProfileHookStatus from "./ProfileStatusHook";

export const ProfileInfo = (props) => {

    if(!props.profile) {
       return  <img src={preloader}/>
    }


    return (
        <div >
            <div>
                {/*<img src="https://www.nultylighting.co.uk/wp-content/uploads/2012/10/retail-store-sport-red-light-tunnel-consultant-nulty-banner-1920x1080.jpg" alt=""/>*/}
                <div>
                    <img src={props.profile.photos.large} alt=""/>
                    <ProfileHookStatus status={props.status} updateStatusTC={props.updateStatusTC}/>
                </div>
                </div>
        </div>
    )
}