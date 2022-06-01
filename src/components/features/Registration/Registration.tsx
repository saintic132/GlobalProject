import React, {ChangeEvent, useState} from 'react';
import {Field, Form, Formik, useFormik} from "formik";
import SuperButton from "../../../common/buttons/c2-SuperButton/SuperButton";
import style from './Registration.module.css';
import {Dispatch} from "redux";
import {registrationAPI, RegistrationParamsType} from "../../../common/API/RegistrationAPI";
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {registrationTC} from "./RegistrationReducer";
import {useSelector} from "react-redux";

export const Registration = () => {

    /*const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
        },
    })*/
    const [email, setEmail] = useState('')
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const [password, setPassword] = useState('')
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }
    const [confirmPassword, setConfirmPassword] = useState('')
    const onChangeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.currentTarget.value)
    }
    const disableButton = useAppSelector(store => store.)
    const dispatch = useAppDispatch()



    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
    }
    const onSubmit = () => {
        dispatch(registrationTC({email, password}))
    }

    return (
        <div className={style.registration__container}>
            <div className={style.registration__edit_body}>

                <h1>IT-Incubator</h1>
                <h2>Sign up</h2>

                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}

                >
                    <Form className={style.registration__edit}>
                        <div className={style.registration__edit}>
                            <label>Email</label>
                            <Field
                                name='email'
                                type='text'
                                placeholder='Enter your Email'
                                value={email}
                                onChange={onChangeEmail}
                            />
                        </div>
                        <div className={style.registration__edit}>
                            <label>Password</label>
                            <Field
                                name='password'
                                type='password'
                                placeholder='Enter password'
                                value={password}
                                onChange={onChangePassword}
                            />
                        </div>
                        <div className={style.registration__edit}>
                            <label>Confirm password</label>
                            <Field
                                name='confirmPassword'
                                type='password'
                                placeholder='Enter password'
                                value={confirmPassword}
                                onChange={onChangeConfirmPassword}
                            />
                        </div>
                        <div className={style.registration__edit_buttons}>
                            <SuperButton
                                className={style.registration__edit_buttonCancel}
                                type='reset'
                            >
                                Cancel
                            </SuperButton>
                            <SuperButton
                                className={style.registration__edit_buttonRegistration}
                                type='submit'
                                disabled={}
                            >
                                Register
                            </SuperButton>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};