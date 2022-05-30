import {TypedDispatch} from "../store";
import {userAPI} from "../../common/API/API";

export enum ACTIONS_PROFILE_TYPE {
    CHANGE_NICKNAME_PROFILE = 'Profile/CHANGE_NICKNAME_PROFILE',
    CHANGE_EDITMODE_PROFILE = 'Profile/CHANGE_EDITMODE_PROFILE',
}

export type ProfileActionsType = EditProfileType | SetEditProfileType

type InitialProfileStateType = {
    name: string
    email: string
    avatar: string | undefined
    editProfile: boolean
}
let initialProfileState: InitialProfileStateType = {
    name: 'he',
    email: "hello@aga.ru",
    avatar: undefined,
    editProfile: false
}

const profileReducer = (state: InitialProfileStateType = initialProfileState, action: ProfileActionsType): InitialProfileStateType => {
    switch (action.type) {
        case ACTIONS_PROFILE_TYPE.CHANGE_NICKNAME_PROFILE: {
            return {
                ...state,
                name: action.name,
                avatar: action.avatar
            }
        }
        case ACTIONS_PROFILE_TYPE.CHANGE_EDITMODE_PROFILE: {
            return {
                ...state, editProfile: action.editMode
            }
        }
        default:
            return state
    }
}

//Actions
export const editProfileAC = (name: string, avatar?: string) => ({
    type: ACTIONS_PROFILE_TYPE.CHANGE_NICKNAME_PROFILE,
    name,
    avatar
} as const)
export const setEditProfileAC = (editMode: boolean) => ({
    type: ACTIONS_PROFILE_TYPE.CHANGE_EDITMODE_PROFILE,
    editMode
} as const)
export const setErrorProfileAC = (editMode: boolean) => ({
    type: ACTIONS_PROFILE_TYPE.CHANGE_EDITMODE_PROFILE,
    editMode
} as const)
type EditProfileType = ReturnType<typeof editProfileAC>
type SetEditProfileType = ReturnType<typeof setEditProfileAC>

//Thunk
export const editProfileThunk = (name: string, avatar?: string) => (dispatch: TypedDispatch) => {
    userAPI.editProfile(name, avatar)
        .then(res => {
            if (res.status >= 200 && res.status < 400) {
                dispatch(editProfileAC(res.data.updatedUser.name, res.data.updatedUser.avatar))
            }
        })
        .catch(err => {

        })
}


export default profileReducer