import React, {useEffect} from 'react';
import style from './PackList.module.css'
import {useAppDispatch, useAppSelector} from "../../../../../../store/store";
import {getPacksTC} from "../../../../../../store/reducers/packs-reducer";
import SuperButton from '../../../../../../common/buttons/c2-SuperButton/SuperButton';
import sortIcon from '../../../../../../assets/img/sort/sort.png'

export const PackList = () => {

    const packs = useAppSelector(state => state.packs.cardPacks)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getPacksTC())
    }, [dispatch])

    const onClockHandleSort = () => {
        dispatch(getPacksTC('1updated'))
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
                <span className={style.packList__updates}>
                    <div
                        className={style.packList__sort}
                        onClick={onClockHandleSort}
                    >
                        Last Updated
                    <img src={sortIcon} alt="sort"/>
                    </div>
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