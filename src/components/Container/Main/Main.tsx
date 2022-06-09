import React from 'react';
import Profile from "./Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Login} from "../../features/login/Login";
import {ForgotPass} from "../../features/forgotPassword/ForgotPass";
import {CheckEmail} from "../../features/forgotPassword/CheckEmail/CheckEmail";
import Error404 from "../../../common/404/Error404";
import {Registration} from "../../features/register/Registration";
import {useAppSelector} from "../../../store/store";
import {SetNewPassword} from "../../features/forgotPassword/SetNewPassword/SetNewPassword";
import PacksListContainer from "./PacksListContainer/PacksListContainer";

export function Main() {

    const isLoggedIn = useAppSelector(state => state.profile.helpers.isLoggedIn)

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<Profile isLoginIn={isLoggedIn}/>}
                />
                <Route
                    path="/cards"
                    element={<PacksListContainer isLoginIn={isLoggedIn}/>}
                />
                <Route
                    path="login"
                    element={<Login/>}
                />
                <Route
                    path='register'
                    element={<Registration/>}
                />
                <Route
                    path="forgot"
                    element={<ForgotPass/>}
                />
                <Route
                    path="*"
                    element={<Error404/>}
                />
                <Route
                    path="recover"
                    element={<CheckEmail/>}
                />
                <Route
                    path="set-new-password/:token"
                    element={<SetNewPassword/>}
                />
            </Routes>
        </>
    )
}