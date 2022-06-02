import {Dispatch} from "redux";
import axios, {AxiosResponse} from "axios";
import {TypedDispatch} from "../store";

const initialState = {
    isLoggedIn: false
}

export const authReducer = (state: InitialStateType = initialState, action: LoginActionType): InitialStateType => {
    switch (action.type) {
        case "login/SET-IS-LOGGED-IN":
            return {...state, isLoggedIn: action.isLoggedIn}
        default:
            return state
    }
}

// types
type InitialStateType = {
    isLoggedIn: boolean
}
export type LoginActionType = ReturnType<typeof setLoggedInAC>

// actions
const setLoggedInAC = (isLoggedIn:boolean) => ({type: 'login/SET-IS-LOGGED-IN', isLoggedIn} as const)

// thunks
export const loginTC = (data: LoginType) => {
    return (dispatch: TypedDispatch) => {
        authAPI.login(data)
            .then((res) => {
                dispatch(setLoggedInAC(true))
            })
            .catch((error) => {
                alert(error)
            })
    }
}

// api
export const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true,
})

export const authAPI = {
    login(data: LoginType) {
        return instance.post<LoginType, AxiosResponse<ResponseType>>(`/auth/login`, data)
    },
}

type LoginType = {
    email: string
    password: string
    rememberMe: boolean
}

type ResponseType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number;
    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean;
    rememberMe: boolean;
    error?: string;
}
