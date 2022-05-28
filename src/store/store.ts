import {applyMiddleware, combineReducers, Store, legacy_createStore as createStore} from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import testReducer from "./reducers/test-reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export type ActionsType = any
export type ReduxStateType = ReturnType<typeof rootReducer>
export type TypedDispatch = ThunkDispatch<ReduxStateType, any, ActionsType>


let rootReducer = combineReducers({
    test: testReducer
})

export const store: Store<ReduxStateType, ActionsType> = createStore(rootReducer, applyMiddleware(thunk))



export const useAppDispatch = () => useDispatch<TypedDispatch>()
export const useAppSelector: TypedUseSelectorHook<ReduxStateType> = useSelector


