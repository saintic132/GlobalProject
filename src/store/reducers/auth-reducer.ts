import {TypedDispatch} from "../store";
import { authAPI, LoginType } from "../../common/API/API";

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




