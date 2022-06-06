import {applyMiddleware, combineReducers, Store, legacy_createStore as createStore} from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import profileReducer, {ProfileActionsType} from "./reducers/profile-reducer";
import {authReducer, LoginActionType} from "./reducers/auth-reducer";
import {RegistrationActionsType, registrationReducer} from "./reducers/registration-reducer";
import {cardsReducer} from "../components/Container/Main/Cards/cards-bll/cardsReducer";
import {CardsActionsType} from "../components/Container/Main/Cards/cards-bll/cardsActions";

export type ActionsType = ProfileActionsType | LoginActionType | RegistrationActionsType | CardsActionsType
export type ReduxStateType = ReturnType<typeof rootReducer>
export type TypedDispatch = ThunkDispatch<ReduxStateType, any, ActionsType>


let rootReducer = combineReducers({
    profile: profileReducer,
    auth: authReducer,
    registration: registrationReducer,
    cards: cardsReducer,
})

export const store: Store<ReduxStateType, ActionsType> = createStore(rootReducer, applyMiddleware(thunk))

export const useAppDispatch = () => useDispatch<TypedDispatch>()
export const useAppSelector: TypedUseSelectorHook<ReduxStateType> = useSelector



