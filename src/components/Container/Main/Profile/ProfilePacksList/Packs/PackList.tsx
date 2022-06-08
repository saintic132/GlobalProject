import React, {useEffect, useState} from 'react';
import style from './PackList.module.css'
import {useAppDispatch, useAppSelector} from "../../../../../../store/store";
import {getPacksTC} from "../../../../../../store/reducers/packs-reducer";
import SuperButton from '../../../../../../common/buttons/c2-SuperButton/SuperButton';
import sortIcon from '../../../../../../assets/img/sort/sort.png'

export const PackList = () => {

    const packs = useAppSelector(state => state.packs.cardPacks)
    const dispatch = useAppDispatch()

    const [sortNumber, setSortNumber] = useState<number>(1);

    useEffect(() => {
        dispatch(getPacksTC())
    }, [dispatch])

    const onClickHandleSortByUpdate = () => {
        if (sortNumber === 0) {
            dispatch(getPacksTC(sortNumber + 'updated'))
            setSortNumber(1)
        } else {
            dispatch(getPacksTC(sortNumber + 'updated'))
            setSortNumber(0)
        }
    }

    return (
        <div className={style.packList__container}>
            <div className={style.packList__row}>
                <span className={style.packList__name}>
                    Name
                </span>
                <span className={style.packList__cards}>
                    Cards
                </span>
                <span className={style.packList__updates} onClick={onClickHandleSortByUpdate}>
                        Last Updated
                    <img
                        className={sortNumber ? style.packList__updates_img_1 : style.packList__updates_img_0}
                        src={sortIcon}
                        alt="sort"
                    />
                </span>
                <span className={style.packList__create}>
                    Created by
                </span>
                <span className={style.packList__action}>
                    Actions
                </span>
            </div>

            {
                packs && packs.map(pack => {
                    return (
                        <div
                            key={pack._id}
                            className={style.packList__list}
                        >
                            <span className={style.packList__name}>
                                {pack.name}
                            </span>
                            <span className={style.packList__cards}>
                                {pack.cardsCount}</span>
                            <span className={style.packList__updates}>{pack.updated}
                            </span>
                            <span className={style.packList__create}>
                                {pack.user_name}
                            </span>
                            <span className={style.packList__action}>
                                <SuperButton className={style.packList__button_delete}>
                                    Delete
                                </SuperButton>
                                <SuperButton className={style.packList__button_edit_learn}>
                                    Edit
                                </SuperButton>
                                <SuperButton className={style.packList__button_edit_learn}>
                                    Learn
                                </SuperButton>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}