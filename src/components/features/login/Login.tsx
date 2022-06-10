import SuperButton from "../../../common/buttons/c2-SuperButton/SuperButton";
import style from './Login.module.css'
import {ErrorMessage, Field, Form, Formik} from "formik";
import {loginTC, setErrorToProfileAC} from "../../../store/reducers/profile-reducer";
import {useAppDispatch, useAppSelector} from "../../../store/store";
import * as Yup from 'yup';
import show_pass from "../../../assets/img/show_hide_password/show.png";
import hidden_pass from "../../../assets/img/show_hide_password/hidden.png";
import React, {useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";


type FormikInputType = {
    email: string,
    password: string,
    rememberMe: boolean,
}

export const Login = () => {
    const dispatch = useAppDispatch()
    const register = useAppSelector(state => state.profile)
    const [showPass, setShowPass] = useState<boolean>(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (register.helpers.isLoggedIn) {
            navigate('/')
        }

        return () => {
            if (register.helpers.errorMessage) {
                dispatch(setErrorToProfileAC(null))
            }
        }
    }, [register.helpers.isLoggedIn, register.helpers.errorMessage, dispatch, navigate])

    const initialValues: FormikInputType = {
        email: '',
        password: '',
        rememberMe: false
    }
    const validate = Yup.object({
        email: Yup.string().required('Required').email('must be a valid email'),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Too short - should be 8 chars minimum.')
    })

    const onSubmit = (values: FormikInputType) => {
        dispatch(loginTC(values.email, values.password, values.rememberMe))
    }

    return (
        <div className={style.login__container}>
            <div className={style.login__edit_body}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validate}
                >
                    <Form className={style.login__edit}>
                        <h2>Sign in</h2>
                        <div className={style.login__form_body}>
                            <div className={style.login__edit}>
                                <label>Email</label>
                                <Field
                                    className={style.login__edit_input}
                                    name='email'
                                    type='text'
                                    placeholder='Enter your Email'
                                />
                                <ErrorMessage name="email" component="div"
                                              className={style.login_error}/>
                            </div>
                            <div className={style.login__edit}>
                                <label>Password</label>
                                <Field
                                    className={style.login__edit_input}
                                    name='password'
                                    type={showPass ? 'text' : 'password'}
                                    placeholder='Enter the password'
                                />
                                <img
                                    className={style.login__show_hide_pass}
                                    src={showPass ? show_pass : hidden_pass}
                                    onClick={() => setShowPass(!showPass)}
                                    alt="show or hide"/>
                                <ErrorMessage name="password" component="div"
                                              className={style.login_error}/>
                            </div>
                            <div className={style.login__edit_checkbox_container}>
                                Remember Me
                                <Field
                                    className={style.login__edit_checkbox}
                                    name='rememberMe'
                                    type='checkbox'
                                />
                            </div>
                            {
                                !register.helpers.errorMessage &&
                                <div className={style.fakeDiv}/>
                            }
                            {
                                register.helpers.errorMessage &&
                                <div className={style.login_server_error}>
                                    {register.helpers.errorMessage}
                                </div>
                            }
                            <div className={style.login__forgotPass}>
                                <NavLink to='/forgot'>Forgot password</NavLink>
                            </div>
                            <div className={style.login__edit_buttons}>
                                <SuperButton
                                    className={style.login__edit_buttonLogin}
                                    type='submit'
                                    disabled={register.helpers.disableButton}
                                >
                                    Login
                                </SuperButton>
                            </div>
                        </div>
                    </Form>
                </Formik>
                <div className={style.login_sign_up_container}>
                    <div className={style.login__sign_up_account}>
                        Don't have an account?
                    </div>
                    <div className={style.login__sign_up}>
                        <NavLink to='/register'>Sign Up</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
};