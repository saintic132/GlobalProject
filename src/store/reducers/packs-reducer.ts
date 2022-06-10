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
    sortPacks: string
}

const initialState = {
    cardPacks: [],
    cardPacksTotalCount: 0,
    maxCardsCount: 110,
    minCardsCount: 0,
    page: 1,
    pageCount: 5,
    sortPacks: '0updated'
}

export enum ACTIONS_PROFILE_TYPE {
    SET_PACKS = 'PACKS/SET_PACKS',
    SET_MIN_CARDS_FILTER_VALUE = 'PACKS/SET_MIN_CARDS_FILTER_VALUE',
    SET_MAX_CARDS_FILTER_VALUE = 'PACKS/SET_MAX_CARDS_FILTER_VALUE',
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
        case ACTIONS_PROFILE_TYPE.SET_MIN_CARDS_FILTER_VALUE: {
            return {
                ...state,
                minCardsCount: action.value
            }
        }
        case ACTIONS_PROFILE_TYPE.SET_MAX_CARDS_FILTER_VALUE: {
            return {
                ...state,
                maxCardsCount: action.value
            }
        }
        default:
            return state
    }
}

// actions
export const setPacksAC = (packs: CardPacksType[], cardPacksTotalCount: number, page: number, selectPageCount: number) =>
    ({type: ACTIONS_PROFILE_TYPE.SET_PACKS, packs, cardPacksTotalCount, page, selectPageCount} as const)
export const setMinCardsFilterValueAC = (value: number) =>
    ({type: ACTIONS_PROFILE_TYPE.SET_MIN_CARDS_FILTER_VALUE, value} as const)
export const setMaxCardsFilterValueAC = (value: number) =>
    ({type: ACTIONS_PROFILE_TYPE.SET_MAX_CARDS_FILTER_VALUE, value} as const)

//Types Actions

type SetPacksType = ReturnType<typeof setPacksAC>
type SetMinCardsFilterValueType = ReturnType<typeof setMinCardsFilterValueAC>
type SetMaxCardsFilterValueType = ReturnType<typeof setMaxCardsFilterValueAC>
export type PacksActionsType = SetPacksType | SetMinCardsFilterValueType | SetMaxCardsFilterValueType

//Thunk

export const getPacksTC = (sortPacks: string, page: number, selectPageCount: number) => (dispatch: TypedDispatch, getState: () => ReduxStateType) => {
    const {minCardsCount, maxCardsCount} = getState().packs
    packsList.getPacks(minCardsCount, maxCardsCount, sortPacks, page, selectPageCount)
        .then(res => {
            dispatch(setPacksAC(res.data.cardPacks, res.data.cardPacksTotalCount, page, selectPageCount))
        })

}

