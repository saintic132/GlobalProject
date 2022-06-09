import {Dispatch} from "redux";
import {setCardsAC} from "./cardsActions";
import {cardsAPI} from "../../../../../common/API/CardsAPI";
import {TypedDispatch} from "../../../../../store/store";


export const getCardsTC = (cardPack_id: string) => (dispatch: Dispatch) => {
    cardsAPI.getCards(cardPack_id)
        .then(res => {
            dispatch(setCardsAC(res.data.cards))
        })
}

export const addCardsTC = (cardPack_id: string) => (dispatch: TypedDispatch) => {
    cardsAPI.addCards(cardPack_id)
        .then(res => {
            console.log(res.data)
            dispatch(getCardsTC(cardPack_id))
        })
}
export const deleteCardsTC = (cardPack_id: string, cardID: string) => (dispatch: TypedDispatch) => {
    cardsAPI.deleteCards(cardID)
        .then(res => {
            console.log(res.data)
            dispatch(getCardsTC(cardPack_id))
        })
}

