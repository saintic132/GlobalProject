import React, {useEffect, useState} from 'react';
import SuperButton from "../../../../../common/buttons/c2-SuperButton/SuperButton";
import {Card} from "./card";
import SuperInputText from "../../../../../common/buttons/c1-SuperInputText/SuperInputText";
import {useAppDispatch, useAppSelector} from "../../../../../store/store";
import style from "./CardTable.module.css";
import {Paginator} from "../../../../../common/paginator/Paginator";
import {addCardsTC, getCardsTC} from "../cards-bll/cardsReducer";

export const CardTable = () => {
    const cards = useAppSelector(store => store.cards)
    const dispatch = useAppDispatch()
    const tempPackID = '627e52dbf2959a00042c3c46'
    //------------------
    const cardsTotalCount = useAppSelector(store => store.cards.cardsTotalCount)
    const cardsCountOnPage = useAppSelector(store => store.cards.pageCount)

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [selectPageCount, setSelectPageCount] = useState<number>(5);

    useEffect(() => {
        dispatch(getCardsTC(tempPackID, currentPage, selectPageCount))
    }, [dispatch, currentPage, selectPageCount])


    const addCardsHandler = () => {
        dispatch(addCardsTC(tempPackID, currentPage, selectPageCount))
    }

    return (
        <div className={style.cardTable__container}>
            {/*<SuperModalWindow activeModal={activeModal} activationModalWindow={activationModalWindow}/> */}
            <h2>Some pack...</h2>
            <div className={style.cardTable__find_and_addCard}>
                <div className={style.cardTable__find}>
                    <SuperInputText label={'Question'}/>
                    <SuperInputText label={'Answer'}/>
                </div>
                <SuperButton onClick={()=>{addCardsHandler()}}>
                    Add card
                </SuperButton>
            </div>

            <div className={style.cardTable__row}>
                <span className={style.cardTable__question}>Question</span>
                <span className={style.cardTable__answer}>Answer</span>
                <span className={style.cardTable__grade}>Grade</span>
                <span className={style.cardTable__last_updated}>Last Updated</span>
            </div>


                {cards && cards.cards.map(card => <Card key={card._id}
                                               card_id={card._id}
                                               tempPackID={tempPackID}
                                               currentPage={currentPage}
                                               selectPageCount={selectPageCount}/>)}


            <Paginator
                currentPage={currentPage}
                allPacksCount={cardsTotalCount}
                packsCountOnPage={cardsCountOnPage}
                setCurrentPage={setCurrentPage}
                selectPageCount={selectPageCount}
                setSelectPageCount={setSelectPageCount}
            />
        </div>
    );
};

