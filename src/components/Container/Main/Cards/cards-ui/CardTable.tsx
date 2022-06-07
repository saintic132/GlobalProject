import React, {useEffect} from 'react';
import SuperButton from "../../../../../common/buttons/c2-SuperButton/SuperButton";
import {Card} from "./card";
import SuperInputText from "../../../../../common/buttons/c1-SuperInputText/SuperInputText";
import {getCardsTC} from "../cards-bll/cardsThunk";
import {useAppDispatch, useAppSelector} from "../../../../../store/store";
import style from "./CardTable.module.css";

export const CardTable = () => {
    const cards = useAppSelector(store => store.cards)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getCardsTC('627e52dbf2959a00042c3c46'))
    }, [])
    //'627e52dbf2959a00042c3c46'


    return (
        <div className={style.cardTable__container}>
            {/*<SuperModalWindow activeModal={activeModal} activationModalWindow={activationModalWindow}/> */}
            <h2>Some pack...</h2>
            <div className={style.cardTable__find_and_addCard}>
                <div className={style.cardTable__find}>
                    <SuperInputText label={'Question'}/>
                    <SuperInputText label={'Answer'}/>
                </div>
                <SuperButton >
                    Add card
                </SuperButton>
            </div>

            <div className={style.cardTable__row}>
                <span className={style.cardTable__question}>Question</span>
                <span className={style.cardTable__answer}>Answer</span>
                <span className={style.cardTable__last_updated}>Last Updated</span>
                <span className={style.cardTable__grade}>Grade</span>
            </div>
            <div>

                {cards.cards.map(card => <Card key={card._id} card_id={card._id} />)}

            </div>
        </div>
    );
};

