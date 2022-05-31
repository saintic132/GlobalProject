import SuperInputText from "../../../common/buttons/c1-SuperInputText/SuperInputText"
import SuperCheckbox
    from "../../../common/buttons/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../../../common/buttons/c2-SuperButton/SuperButton";
import style from './Login.module.css'
import {ForgotPass} from "../ForgotPass/ForgotPass";
import {useFormik} from "formik";

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 5) {
                errors.password = 'Must be 5 characters at least';
            }
            return errors;
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })

    return (
            <div className={style.loginContainer}>
                <h1 className={style.title}>It-incubator</h1>
                <h2 className={style.subtitle}>Sign In</h2>

                <form className={style.form} onSubmit={formik.handleSubmit}>
                    <SuperInputText className={style.inputText} {...formik.getFieldProps('email')}/>
                    {formik.touched.email && formik.errors.email && <div style={{color: 'red'}}>{formik.errors.email}</div>}

                    <SuperInputText className={style.inputText} {...formik.getFieldProps('password')}/>
                    {formik.touched.password && formik.errors.password && <div style={{color: 'red'}}>{formik.errors.password}</div>}

                    <SuperCheckbox className={style.inputCheckbox} {...formik.getFieldProps('rememberMe')}>Remember me</SuperCheckbox>
                    <ForgotPass />
                    <SuperButton className={style.btn} type={'submit'}>Login</SuperButton>
                </form>

                <div><a href={'#'}>Don’t have an account?</a></div>
                <div><a href={'#'}>Sign Up</a></div>
            </div>
    )
};