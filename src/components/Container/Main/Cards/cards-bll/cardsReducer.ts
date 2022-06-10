import {CardItemType, cardsAPI, CardsStateType} from "../../../../../common/API/CardsAPI";
import {Dispatch} from "redux";
import {TypedDispatch} from "../../../../../store/store";



export const CardsInitState: CardsStateType = {
    cards: [],
    cardsTotalCount: 0,
    maxGrade: 5,
    minGrade: 0,
    page: 1,
    pageCount: 5,
};

export const cardsReducer = (state = CardsInitState, action: CardsActionsType): CardsStateType => {
    switch (action.type) {
        case ACTIONS_CARDS_TYPE.SET_CARDS:
            return {
                ...state,
                cards: [...action.cards],
                cardsTotalCount: action.cardsTotalCount,
                page: action.page,
                pageCount: action.selectPageCount
            }
        default:
            return state
    }
};

//ACTIONS
export enum ACTIONS_CARDS_TYPE {
    SET_CARDS = 'CARDS/SET_CARDS',
}
export type CardsActionsType = SetCardsActionType

export const setCardsAC = (cards: CardItemType[], cardsTotalCount: number, page: number, selectPageCount: number) => {
    return {type: ACTIONS_CARDS_TYPE.SET_CARDS, cards, cardsTotalCount, page, selectPageCount } as const
}


export type SetCardsActionType = ReturnType <typeof setCardsAC>


//THUNK
export const getCardsTC = (cardPack_id: string, page: number, selectPageCount: number) => (dispatch: Dispatch) => {
    cardsAPI.getCards(cardPack_id, page, selectPageCount)
        .then(res => {
            dispatch(setCardsAC(res.data.cards, res.data.cardsTotalCount, page, selectPageCount))
        })
}

export const addCardsTC = (cardPack_id: string, page: number, selectPageCount: number) => (dispatch: TypedDispatch) => {
    cardsAPI.addCards(cardPack_id)
        .then(res => {
            dispatch(getCardsTC(cardPack_id, page, selectPageCount))
        })
}
export const deleteCardsTC = (cardPack_id: string, cardID: string, page: number, selectPageCount: number) => (dispatch: TypedDispatch) => {
    cardsAPI.deleteCards(cardID)
        .then(res => {
            dispatch(getCardsTC(cardPack_id, page, selectPageCount))
        })
}