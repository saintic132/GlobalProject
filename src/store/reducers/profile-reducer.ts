export enum ACTIONS_PROFILE_TYPE {
    CHANGE_NICKNAME_PROFILE = 'Profile/CHANGE_NICKNAME_PROFILE',
    CHANGE_EDITMODE_PROFILE = 'Profile/CHANGE_EDITMODE_PROFILE',
}

export type ProfileActionsType = EditProfileType | SetEditProfileType

type InitialProfileStateType = {
    name: string
    email: string
    photo: string
    editProfile: boolean
}
let initialProfileState: InitialProfileStateType = {
    name: '',
    email: '',
    photo: '',
    editProfile: false
}

const profileReducer = (state: InitialProfileStateType = initialProfileState, action: ProfileActionsType): InitialProfileStateType => {
    switch (action.type) {
        case ACTIONS_PROFILE_TYPE.CHANGE_NICKNAME_PROFILE: {
            return {
                ...state, name: action.name
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

export const editProfileAC = (name: string) => ({type: ACTIONS_PROFILE_TYPE.CHANGE_NICKNAME_PROFILE, name} as const)
export const setEditProfileAC = (editMode: boolean) => ({type: ACTIONS_PROFILE_TYPE.CHANGE_EDITMODE_PROFILE, editMode} as const)
type EditProfileType = ReturnType<typeof editProfileAC>
type SetEditProfileType = ReturnType<typeof setEditProfileAC>

export default profileReducer