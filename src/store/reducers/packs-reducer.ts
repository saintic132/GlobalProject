import {ReduxStateType, TypedDispatch} from "../store";
import {packsList} from "../../common/API/packsAPI";

export type CardPacksType = {
    _id: string
    user_id: string
    name: string
    cardsCount: number
    user_name: string
    updated: string
}

export type InitialPacksStateType = {
    cardPacks: CardPacksType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}

const initialState = {
    cardPacks: [],
    cardPacksTotalCount: 0,
    maxCardsCount: 4,
    minCardsCount: 0,
    page: 1,
    pageCount: 5,
}

export enum ACTIONS_PROFILE_TYPE {
    SET_PACKS = 'PACKS/SET_PACKS',
}

export const packsReducer = (state: InitialPacksStateType = initialState, action: PacksActionsType): InitialPacksStateType => {
    switch (action.type) {
        case ACTIONS_PROFILE_TYPE.SET_PACKS: {
            return {
                ...state,
                cardPacks: [...action.packs],
                cardPacksTotalCount: action.cardPacksTotalCount,
                page: action.page,
                pageCount: action.selectPageCount
            }
        }
        default:
            return state
    }
}

// actions
export const setPacksAC = (packs: CardPacksType[], cardPacksTotalCount: number, page: number, selectPageCount: number) =>
    ({type: ACTIONS_PROFILE_TYPE.SET_PACKS, packs, cardPacksTotalCount, page, selectPageCount} as const)

//Types Actions

type SetPacksType = ReturnType<typeof setPacksAC>
export type PacksActionsType = SetPacksType

//Thunk

// export const getPacksTC = (min: number, max: number, sortPacks: number, page: number, pageCount: number) => (dispatch: TypedDispatch, getState: () => ReduxStateType) => {
export const getPacksTC = (sortPacks: string, page: number, selectPageCount: number) => (dispatch: TypedDispatch, getState: () => ReduxStateType) => {
    // const {_id} = getState().profile
    packsList.getPacks(sortPacks, page, selectPageCount)
        .then(res => {
            dispatch(setPacksAC(res.data.cardPacks, res.data.cardPacksTotalCount, page, selectPageCount))
        })

}

