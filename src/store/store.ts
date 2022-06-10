import {applyMiddleware, combineReducers, Store, legacy_createStore as createStore, compose} from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {ProfileActionsType, profileReducer} from "./reducers/profile-reducer";
import {
    PackListActionsType,
    packsListReducer
} from "./reducers/packsList-reducer";
import {CardsActionsType, cardsReducer} from "../components/Container/Main/Cards/cards-bll/cardsReducer";
import {PacksActionsType, packsReducer} from "./reducers/packs-reducer";



export type ActionsType = ProfileActionsType | PackListActionsType| PacksActionsType | CardsActionsType
export type ReduxStateType = ReturnType<typeof rootReducer>
export type TypedDispatch = ThunkDispatch<ReduxStateType, any, ActionsType>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let rootReducer = combineReducers({
    profile: profileReducer,
    packsList: packsListReducer,
    cards: cardsReducer,
    packs: packsReducer
})

export const store: Store<ReduxStateType, ActionsType> = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export const useAppDispatch = () => useDispatch<TypedDispatch>()
export const useAppSelector: TypedUseSelectorHook<ReduxStateType> = useSelector



