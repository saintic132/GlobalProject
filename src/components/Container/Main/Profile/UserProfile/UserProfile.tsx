import React, {memo} from 'react';
import style from "./UserProfile.module.css";
import SuperButton from "../../../../../common/buttons/c2-SuperButton/SuperButton";
import noAvatar from '../../../../../common/img/no-avatar.png'

type UserProfilePropsType = {
    name: string
    avatar: string | undefined
    clickToEditProfile: (editProfile: boolean) => void
}

export const UserProfile = memo(({name, avatar, clickToEditProfile}: UserProfilePropsType) => {
    return (
        <div className={style.userProfile}>
            <img
                src={avatar === undefined || avatar === 'email' ? noAvatar: avatar}
                alt="avatar"
            />
            <div className={style.userProfile__name}>
                {name}
            </div>
            <div className={style.userProfile__jobName}>
                Front-end developer
            </div>
            <div>
                <SuperButton
                    onClick={() => clickToEditProfile(true)}
                    className={style.userProfile__button_editProfile}
                >
                    Edit profile
                </SuperButton>
            </div>
        </div>
    )
})