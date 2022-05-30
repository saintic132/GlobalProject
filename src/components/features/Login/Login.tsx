import SuperInputText from "../../../common/buttons/c1-SuperInputText/SuperInputText"
import SuperCheckbox
    from "../../../common/buttons/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../../../common/buttons/c2-SuperButton/SuperButton";
import style from './Login.module.css'
import {ForgotPass} from "../ForgotPass/ForgotPass";

export const Login = () => {
    return (
        <div className={style.loginContainer}>
            <h1 className={style.title}>It-incubator</h1>
            <h2 className={style.subtitle}>Sign In</h2>
            <form className={style.form}>
                <SuperInputText className={style.input} />
                <SuperInputText className={style.input} />
                <SuperCheckbox />
                <ForgotPass />
            </form>
            <SuperButton className={style.btn}/>
            <div><a href={'#'}>Don’t have an account?</a></div>
            <div><a href={'#'}>Sign Up</a></div>
        </div>
    )
};