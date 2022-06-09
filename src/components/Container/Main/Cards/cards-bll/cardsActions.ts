import {CardItemType} from "../../../../../common/API/CardsAPI";



export enum ACTIONS_CARDS_TYPE {
    SET_CARDS = 'CARDS/SET_CARDS',
}


export type CardsActionsType = SetCardsActionType




export const setCardsAC = (cards: CardItemType[]) => {
    return {type: ACTIONS_CARDS_TYPE.SET_CARDS, cards: cards } as const
}


export type SetCardsActionType = ReturnType <typeof setCardsAC>