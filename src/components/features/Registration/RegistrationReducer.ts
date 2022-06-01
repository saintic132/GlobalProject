import {registrationAPI, RegistrationParamsType} from "../../../common/API/RegistrationAPI";
import {Dispatch} from "redux";

type RegistrationInitialStateType = {
    disableButton: boolean
    errorUnsame: null | string
}

const initialState = {
    disableButton: true,
    errorUnsame: null,
}


const registrationReducer = (state = initialState,
                             action: RegistrationActionsType): RegistrationInitialStateType => {
    switch (action.type) {
        case ACTIONS_REG_TYPE.DISABLE_REGBUTTON_REGISTRATION:
            return {...state, disableButton: action.disableButton}
        case ACTIONS_REG_TYPE.ERROR_UNSAME_PASSWORD:
            return {...state, errorUnsame: action.errorUnsame}
        default:
            return state

    }
}

//ACTIONS
export enum ACTIONS_REG_TYPE {
    DISABLE_REGBUTTON_REGISTRATION = 'REGISTRATION/DISABLE_REGBUTTON_REGISTRATION',
    ERROR_UNSAME_PASSWORD = 'REGISTRATION/ERROR_UNSAME_PASSWORD',
}

export const disableButtonRegisterAC = (disableButton: boolean) => {
    return {type: ACTIONS_REG_TYPE.DISABLE_REGBUTTON_REGISTRATION, disableButton} as const
}
export const errorUnsamePasswordAC = (errorUnsame: null | string) => {
    return {type: ACTIONS_REG_TYPE.ERROR_UNSAME_PASSWORD, errorUnsame} as const
}

//TYPE ACTIONS
type DisButtonRegType = ReturnType<typeof disableButtonRegisterAC>
type ErrUnsamePassType = ReturnType<typeof errorUnsamePasswordAC>

export type RegistrationActionsType =
    DisButtonRegType
    | ErrUnsamePassType

//THUNK
export const registrationTC = (data: RegistrationParamsType) => (dispatch: Dispatch) => {
    registrationAPI.registration(data)
        .then(res => {
            console.log(res.data)
        })
        .catch(e => {
            console.log(e.error)
        })
}