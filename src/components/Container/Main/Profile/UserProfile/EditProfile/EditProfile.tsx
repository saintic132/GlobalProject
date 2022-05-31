import React, {memo, useEffect} from 'react';
import style from './EditProfile.module.css'
import SuperButton from "../../../../../../common/buttons/c2-SuperButton/SuperButton";
import newPhoto from '../../../../../../common/img/add-photo.png'
import {useAppDispatch} from "../../../../../../store/store";
import {editProfileThunk, setErrorToProfileAC} from "../../../../../../store/reducers/profile-reducer";
import noAvatar from '../../../../../../common/img/no-avatar.png'
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';

type EditProfilePropsType = {
    profileData: {
        name: string
        email: string
        avatar: string | undefined
        editProfile: boolean
        disableButton: boolean
        errorMessage: string | null
    },
    clickToEditProfile: (editProfile: boolean) => void
}

type FormikValues = {
    name: string
    avatar: string | undefined | null
}

export const EditProfile = memo(({profileData, clickToEditProfile}: EditProfilePropsType) => {

    const dispatch = useAppDispatch()

    const cancelToEditProfile = () => {
        clickToEditProfile(false)
    }

    const initialValues: FormikValues = {
        name: profileData.name,
        avatar: profileData.avatar
    }
    const validate = Yup.object({
        name: Yup.string().max(15, 'Max length is 15').required('Required'),
    })
    const onSubmit = (values: any) => {
        let {name} = values
        if (name === profileData.name) {
            clickToEditProfile(false)
        } else {
            dispatch(editProfileThunk(name))
        }
    }

    useEffect(() => {
        dispatch(setErrorToProfileAC(null))
    }, [dispatch])

    return (
        <div className={style.editProfile__container}>
            <div className={style.editProfile__edit_body}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validate}
                    onSubmit={onSubmit}
                >
                    <Form className={style.editProfile__edit}>
                        <h2>Personal Information</h2>
                        <img
                            className={style.editProfile__img_avatar}
                            src={profileData.avatar === undefined || profileData.avatar === 'email' ? noAvatar: profileData.avatar}
                            alt="avatar"
                        />
                        <img
                            className={style.editProfile__img_add_new_photo}
                            src={newPhoto}
                            alt='new'
                        />
                        <div className={style.editProfile__edit}>
                            <label>Nickname</label>
                            <Field
                                className={style.editProfile__edit_input}
                                name='name'
                                placeholder='Enter your name'
                            />
                            <ErrorMessage name="name" component="div" className={style.editProfile__edit_error}/>
                        </div>
                        <div className={style.editProfile__edit}>
                            <label>Email</label>
                            <Field
                                className={style.editProfile__edit_input}
                                name='email'
                                placeholder='Enter your email'
                                value={profileData.email}
                            />
                            <ErrorMessage name="email" component="div" className={style.editProfile__edit_error}/>
                        </div>
                        { !profileData.errorMessage &&
                            <div className={style.fakeDiv}>

                            </div>
                        }
                        {
                            profileData.errorMessage &&
                                <div className={style.editProfile__edit_server_error}>
                                    {profileData.errorMessage}
                                </div>
                        }
                        <div className={style.editProfile__edit_buttons}>
                            <SuperButton
                                className={style.editProfile__edit_buttonCancel}
                                type="reset"
                                onClick={cancelToEditProfile}
                            >
                                Cancel
                            </SuperButton>
                            <SuperButton
                                className={style.editProfile__edit_buttonSave}
                                type='submit'
                                disabled={profileData.disableButton}
                            >
                                Save
                            </SuperButton>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
})