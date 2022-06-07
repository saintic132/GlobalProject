import React, {useEffect} from 'react';
import style from './Profile.module.css'
import {EditProfile} from "./UserProfile/EditProfile/EditProfile";
import {useAppDispatch, useAppSelector} from "../../../../store/store";
import {setEditProfileAC} from "../../../../store/reducers/profile-reducer";
import {UserProfile} from "./UserProfile/UserProfile";
import {CardsFilter} from "./CardsFilter/CardsFilter";
import {ProfilePacksList} from "./ProfilePacksList/ProfilePacksList";
import {Redirect} from "../../../../common/Redirect/Redirect";

type ProfilePropsType = {
    isLoginIn: boolean
}

const Profile: React.FC<ProfilePropsType> = () => {

    const profileData = useAppSelector(state => state.profile)
    const dispatch = useAppDispatch()

    const clickToEditProfile = (editMode: boolean) => {
        dispatch(setEditProfileAC(editMode))
    }

    useEffect(() => {
        return () => {
            if (profileData.helpers.editProfile) {
                dispatch(setEditProfileAC(false))
            }
        }
    },[profileData.helpers.editProfile, dispatch])

    if (profileData.helpers.editProfile) {
        return <EditProfile
            profileData={profileData}
            clickToEditProfile={clickToEditProfile}
        />
    }


    return (
        <div className={style.profile__container}>
            <div className={style.profile__body}>
                <div className={style.profile__body_profile}>

                    {/*Компонента с отрисовкой User*/}
                    <UserProfile
                        name={profileData.name}
                        avatar={profileData.avatar}
                        clickToEditProfile={clickToEditProfile}
                    />

                    {/*Компонента с отрисовкой фильра по количеству карт*/}
                    <CardsFilter/>
                </div>
                <div className={style.profile__body_main}>

                    {/*Компонента с отрисовкой Профиля карточек*/}
                    <ProfilePacksList/>
                </div>
            </div>
        </div>
    );
};

export default Redirect(Profile)