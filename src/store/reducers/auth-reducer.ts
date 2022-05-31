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
export type ActionsType = ReturnType<typeof setLoggedInAC>

// actions
const setLoggedInAC = (isLoggedIn:boolean) => ({type: 'login/SET-IS-LOGGED-IN', isLoggedIn} as const)
