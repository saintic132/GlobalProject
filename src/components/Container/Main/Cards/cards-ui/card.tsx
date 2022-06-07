import React from 'react';
import {useAppSelector} from "../../../../../store/store";
import SuperButton from "../../../../../common/buttons/c2-SuperButton/SuperButton";
import style from "./CardTable.module.css";


export type CardPropsType = {
    card_id: string
    //activationModalWindow: ()=> void
}

export const Card = (props: CardPropsType) => {
    const cardItem = useAppSelector(store => store.cards.cards[0])

    return (
        <div className={style.cardTable__list}>
            <span className={style.cardTable__question}>{cardItem.question}</span>
            <span className={style.cardTable__answer}>{cardItem.answer}</span>
            <span className={style.cardTable__last_updated}>{cardItem.grade.toFixed(3)}</span>
            <span className={style.cardTable__grade}>{cardItem.updated.substring(0,16)}</span>

            <span className={style.cardTable__action}>
                <SuperButton className={style.cardTable__button_delete}>Delete</SuperButton>
                <SuperButton className={style.cardTable__button_edit_learn}>Edit</SuperButton>
                <SuperButton className={style.cardTable__button_edit_learn}>Learn</SuperButton>
            </span>
        </div>
    );
};
