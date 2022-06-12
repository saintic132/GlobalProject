import {ReduxStateType, TypedDispatch} from "../store";
import {CardPacksType, userAPI} from "../../common/API/userAPI";

const initialState: InitialStateType = {
    cardPacks: [],
    cardPacksTotalCount: 0,
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 0,
    pageCount: 0,
    filters: {
        min: 0,
        max: 0,
        packName:'',
        myAllValue: false
    }
}

export const packsListReducer = (state: InitialStateType = initialState, action: PackListActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-MIN":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    min: action.min
                }
            }
        case "SET-MAX":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    max: action.max
                }
            }
        case "SET-PACK-NAME":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    packName: action.packName
                }
            }
        case "SET-PACKS-LIST":
            return {
                ...state,
                cardPacks:
                    action.data.map(p => ({...p}))
            }
        case "SET-PAGE-COUNT":
            return {
                ...state,
                pageCount: action.pageCount
            }
        case "SET-MY-ALL-VALUE":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    myAllValue: action.myAllValue
                }
            }
        default:
            return state
    }
}

// types
type InitialStateType = {
    cardPacks: Array<CardPacksType>
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
    filters: {
        min: number
        max: number
        packName: string
        myAllValue: boolean
    }
}

export type PackListActionsType =
    SetPackListActionType |
    SetRangeFromActionType |
    SetRangeToActionType |
    SetPackNameActionType |
    SetPageCountActionType |
    SetMyAllValueActionType

export type SetPackListActionType = ReturnType<typeof setPacksListAC>
export type SetRangeFromActionType = ReturnType<typeof setMinAC>
export type SetRangeToActionType = ReturnType<typeof setMaxAC>
export type SetPackNameActionType = ReturnType<typeof setPackNameAC>
export type SetPageCountActionType = ReturnType<typeof setPageCountAC>
export type SetMyAllValueActionType = ReturnType<typeof setMyAllValueAC>

// actions
export const setPacksListAC = (data: Array<CardPacksType>) => ({type: 'SET-PACKS-LIST', data} as const)
export const setMinAC = (min: number) => ({type: 'SET-MIN', min} as const)
export const setMaxAC = (max: number) => ({type: 'SET-MAX', max} as const)
export const setPackNameAC = (packName: string) => ({type: 'SET-PACK-NAME', packName} as const)
export const setPageCountAC = (pageCount: number) => ({type: 'SET-PAGE-COUNT', pageCount} as const)
export const setMyAllValueAC = (myAllValue: boolean) => ({type: 'SET-MY-ALL-VALUE', myAllValue} as const)

// thunks
export const packListTC = () => {
    return (dispatch: TypedDispatch, getState: () => ReduxStateType) => {
        const {min, max, packName} = getState().packsList.filters
        userAPI.getPacksList(min, max, packName)
            .then((res) => {
                dispatch(setPacksListAC(res.data.cardPacks))
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
