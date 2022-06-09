import {ACTIONS_CARDS_TYPE, CardsActionsType} from "./cardsActions";
import {CardsStateType} from "../../../../../common/API/CardsAPI";



export const CardsInitState: CardsStateType = {
    cards: [],
};

export const cardsReducer = (state = CardsInitState, action: CardsActionsType): CardsStateType => {
    switch (action.type) {
        case ACTIONS_CARDS_TYPE.SET_CARDS:
            return {...state, cards: action.cards}
        default:
            return state
    }
};


