import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../../../store/store";
import SuperButton from "../../../../../common/buttons/c2-SuperButton/SuperButton";
import style from "./CardTable.module.css";
import { deleteCardsTC } from '../cards-bll/cardsReducer';




export type CardPropsType = {
    card_id: string
    tempPackID: string
    currentPage: number
    selectPageCount: number
    //activationModalWindow: ()=> void
}

export const Card = (props: CardPropsType) => {
    const dispatch = useAppDispatch()
    const cardItem = useAppSelector(store => store.cards.cards.filter(card => card._id === props.card_id)[0])

    const deleteCardHandler = () => {
        dispatch(deleteCardsTC(props.tempPackID, cardItem._id, props.currentPage, props.selectPageCount))
    }


    return (
        <div className={style.cardTable__list}>
            <span className={style.cardTable__question}>{cardItem.question}</span>
            <span className={style.cardTable__answer}>{cardItem.answer}</span>
            <span className={style.cardTable__last_updated}>{cardItem.grade.toFixed(3)}</span>
            <span className={style.cardTable__grade}>{cardItem.updated.substring(0,16)}</span>

            <span className={style.cardTable__action}>
                <SuperButton className={style.cardTable__button_delete} onClick={()=>deleteCardHandler()}>Delete</SuperButton>
                <SuperButton className={style.cardTable__button_edit_learn}>Edit</SuperButton>
                <SuperButton className={style.cardTable__button_edit_learn}>Learn</SuperButton>
            </span>
        </div>
    );
};
