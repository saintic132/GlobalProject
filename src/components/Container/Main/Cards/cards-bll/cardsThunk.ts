import {Dispatch} from "redux";
import {SetCardsAC} from "./cardsActions";
import {cardsAPI} from "../../../../../common/API/CardsAPI";


export const getCardsTC = (cardPack_id: string) => (dispatch: Dispatch) => {
    cardsAPI.getCards(cardPack_id)
        .then(res => {
            dispatch(SetCardsAC(res.data.cards))
        })
}