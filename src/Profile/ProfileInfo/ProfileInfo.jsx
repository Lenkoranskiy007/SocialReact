import React, {useState} from 'react'
import classes from "../Profile.module.css";
import preloader from '../../photo/preloader.gif'
import ProfileStatus from "./ProfileStatus";
import {updateStatusTC} from "../../redux/profile-reducer";
import ProfileHookStatus from "./ProfileStatusHook";
import userPhoto from '../../photo/108180118-user-vector-icon-isolated-on-transparent-background-user-logo-concept.jpg'
import {ProfileDataForm} from "./ProfileDataForm";

export const ProfileInfo = (props) => {

    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <img src={preloader}/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhotoTC(e.target.files[0])
        }
    }

    return (

        <div>
            {/*/*<img src="https://www.nultylighting.co.uk/wp-content/uploads/2012/10/retail-store-sport-red-light-tunnel-consultant-nulty-banner-1920x1080.jpg" alt=""/>*!/*/}
             <img src={props.profile.photos.large || userPhoto} alt=""/>
               {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
            <div>
                {editMode
                    ? <ProfileDataForm />
                    : <ProfileData
                      goToEditMode={ () => {setEditMode(true)}}
                      profile={props.profile}
                      isOwner={props.isOwner}
                    />}
                <ProfileHookStatus status={props.status} updateStatusTC={props.updateStatusTC}/>
            </div>
        </div>


    )
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={classes.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export const ProfileData = (props) => {
    return (
        <div>
            {props.isOwner &&   <button onClick={props.goToEditMode}>edit</button>}

        <div>
            <b>Full name</b>: {props.profile.fullName}
        </div>
        <div>
            <b>Looking For A Job</b>: {props.profile.lookingForAJob? 'yes': 'no'}
        </div>
        <div>
            <b>Looking For A Job Description</b>: {props.profile.lookingForAJobDescription ? 'yes': 'no' }
        </div>
        <div>
            <b>About me </b>: {props.profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={props.profile[key]}/>
        })}
        </div>
    </div>)
}
