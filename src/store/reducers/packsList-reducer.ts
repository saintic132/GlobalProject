import {TypedDispatch} from "../store";
import {CardPacksType, userAPI} from "../../common/API/API";

const initialState: InitialStateType = []

export const packsListReducer = (state: InitialStateType = initialState, action: PackListActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-PACKS-LIST":
            return action.data.map(p => ({...p}))
        default:
            return state
    }
}

// types
type InitialStateType = Array<CardPacksType>
export type PackListActionsType = SetPackListActionType
export type SetPackListActionType = ReturnType<typeof setPacksListAC>


// actions
export const setPacksListAC = (data: Array<CardPacksType>) => ({type: 'SET-PACKS-LIST', data} as const)

// thunks
export const packListTC = () => {
    return (dispatch: TypedDispatch) => {
        userAPI.getPacksList()
            .then((res) => {
                dispatch(setPacksListAC(res.data.cardPacks))
            })
            .catch((error) => {
                console.log(error)
            })
    }
}


// const packThunk = (search: string) => (dispatch: Dispatch, getState()) {
//     const state = getState(state => state.packList)
//
//     const {min, max , .....} = state
//
//     api.packlist(search, min,  max)
// }