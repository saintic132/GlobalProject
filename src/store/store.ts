import {applyMiddleware, combineReducers, Store, legacy_createStore as createStore} from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {ProfileActionsType, profileReducer} from "./reducers/profile-reducer";
import {
    PackListActionsType,
    packsListReducer
} from "./reducers/packsList-reducer";
import {PacksActionsType, packsReducer} from "./reducers/packs-reducer";



export type ActionsType = ProfileActionsType | PackListActionsType| PacksActionsType
export type ReduxStateType = ReturnType<typeof rootReducer>
export type TypedDispatch = ThunkDispatch<ReduxStateType, any, ActionsType>


let rootReducer = combineReducers({
    profile: profileReducer,
    packsList: packsListReducer,
    packs: packsReducer
})

export const store: Store<ReduxStateType, ActionsType> = createStore(rootReducer, applyMiddleware(thunk))

export const useAppDispatch = () => useDispatch<TypedDispatch>()
export const useAppSelector: TypedUseSelectorHook<ReduxStateType> = useSelector



