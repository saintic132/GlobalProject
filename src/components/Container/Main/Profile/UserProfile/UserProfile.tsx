import React, {memo} from 'react';
import style from "./UserProfile.module.css";
import SuperButton from "../../../../../common/buttons/c2-SuperButton/SuperButton";

type UserProfilePropsType = {
    clickToEditProfile: (editProfile: boolean) => void
}

export const UserProfile = memo(({clickToEditProfile}: UserProfilePropsType) => {
    return (
        <div className={style.userProfile}>
            <img
                src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png"
                alt="avatar"
            />
            <div className={style.userProfile__name}>
                name name
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