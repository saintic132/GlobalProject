import {ActionsType} from "../store";

const initialState = {
    isLoggedIn: false
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {

        default:
            return state
    }
}

// types
type InitialStateType = {
    isLoggedIn: boolean
}
