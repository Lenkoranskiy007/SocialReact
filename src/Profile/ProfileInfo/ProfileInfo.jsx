import React from 'react'
import classes from "../Profile.module.css";
import preloader from '../../photo/preloader.gif'
import ProfileStatus from "./ProfileStatus";
import {updateStatusTC} from "../../redux/profile-reducer";
import ProfileHookStatus from "./ProfileStatusHook";
import userPhoto from '../../photo/108180118-user-vector-icon-isolated-on-transparent-background-user-logo-concept.jpg'

export const ProfileInfo = (props) => {

    if(!props.profile) {
       return  <img src={preloader}/>
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length ) {
            props.savePhotoTC(e.target.files[0])
        }
    }

    return (
        <div >
            <div>
                {/*<img src="https://www.nultylighting.co.uk/wp-content/uploads/2012/10/retail-store-sport-red-light-tunnel-consultant-nulty-banner-1920x1080.jpg" alt=""/>*/}
                <div>
                    <img src={props.profile.photos.large || userPhoto} alt=""/>
                    {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                    <ProfileHookStatus status={props.status} updateStatusTC={props.updateStatusTC}/>
                </div>
                </div>
        </div>
    )
}