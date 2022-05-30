import React, {memo} from 'react';
import style from './EditProfile.module.css'
import SuperButton from "../../../../../../common/buttons/c2-SuperButton/SuperButton";
import SuperInputText from "../../../../../../common/buttons/c1-SuperInputText/SuperInputText";
import newPhoto from '../../../../../../common/img/add-photo.png'

type EditProfilePropsType = {
    profileData: {
        name: string
        email: string
        photo: string
        editProfile: boolean
    },
    clickToEditProfile: (editProfile: boolean) => void
}

export const EditProfile = memo(({clickToEditProfile}: EditProfilePropsType) => {

    const cancelToEditProfile = () => {
        clickToEditProfile(false)
    }

    const saveNewDataProfile = () => {
        clickToEditProfile(false)
    }

    return (
        <div className={style.editProfile__container}>
            <div className={style.editProfile__edit_body}>
                <h2>Personal Information</h2>
                <img
                    className={style.editProfile__img_avatar}
                    src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png'
                    alt="avatar"
                />
                <img
                    className={style.editProfile__img_add_new_photo}
                    src={newPhoto}
                    alt='new'
                />
                <div className={style.editProfile__edit}>
                    <label>Nickname</label>
                    <SuperInputText
                        className={style.editProfile__edit_input}
                        // value={name}
                    />
                </div>
                <div className={style.editProfile__edit}>
                    <label>Email</label>
                    <SuperInputText
                        className={style.editProfile__edit_input}
                        // value={email}
                    />
                </div>
                <div className={style.editProfile__edit_buttons}>
                    <SuperButton
                        onClick={cancelToEditProfile}
                        className={style.editProfile__edit_buttonCancel}
                    >
                        Cancel
                    </SuperButton>
                    <SuperButton
                        onClick={saveNewDataProfile}
                        className={style.editProfile__edit_buttonSave}
                    >
                        Save
                    </SuperButton>
                </div>
            </div>
        </div>
    )
})