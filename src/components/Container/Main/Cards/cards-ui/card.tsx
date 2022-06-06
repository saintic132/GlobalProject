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

    console.log(cardItem)

    return (
        <div className={style.packList__row}>
            <span className={style.packList__question}>{cardItem.question}</span>
            <span className={style.packList__answer}>{cardItem.answer}</span>
            <span className={style.packList__last_updated}>{cardItem.grade.toFixed(3)}</span>
            <span className={style.packList__grade}>{cardItem.updated.substring(0,16)}</span>

            <div>
                <SuperButton >delete</SuperButton>
                <SuperButton>update</SuperButton>
            </div>
        </div>
    );
};
