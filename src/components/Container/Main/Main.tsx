import React from 'react';
import {Profile} from "./Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Login} from "../../features/Login/Login";
import {ForgotPass} from "../../features/ForgotPass/ForgotPass";
import {EnterNewPass} from "../../features/ForgotPass/EnterNewPass/EnterNewPass";
import Error404 from "../../../common/404/Error404";
import {Registration} from "../../features/Registration/Registration";

export function Main() {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={<Profile/>}
                />
                <Route
                    path="login"
                    element={<Login/>}
                />
                <Route
                    path='registration'
                    element={<Registration/>}
                />
                <Route
                    path="forgotPass"
                    element={<ForgotPass/>}
                />
                <Route
                    path="enterNewPass"
                    element={<EnterNewPass/>}
                />
                <Route
                    path="*"
                    element={<Error404/>}
                />
            </Routes>
        </div>
    )
}