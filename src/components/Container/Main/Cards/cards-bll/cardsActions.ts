import {CardItemType} from "../../../../../common/API/CardsAPI";


export type CardsActionsType = SetCardsActionType



export const SetCardsAC = (cards: CardItemType[]) => {
    return {type: "cards/SET_CARDS", cards }
}

export type SetCardsActionType = ReturnType <typeof SetCardsAC>