import {CardsActionsType} from "./cardsActions";
import {CardsStateType} from "../../../../../common/API/CardsAPI";



export const CardsInitState: CardsStateType = {
    cards: [],
};

export const cardsReducer = (state = CardsInitState, action: CardsActionsType): CardsStateType => {
    switch (action.type) {
        case "cards/SET_CARDS":
            return {...state, cards: action.cards}

        default:
            return state

    }
};


