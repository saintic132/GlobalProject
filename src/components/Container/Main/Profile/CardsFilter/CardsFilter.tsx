import React, {memo, useState} from 'react';
import style from "./CardsFilter.module.css";
import {useAppDispatch, useAppSelector} from "../../../../../store/store";
import {
    getPacksTC,
    setMaxCardsFilterValueAC,
    setMinCardsFilterValueAC
} from "../../../../../store/reducers/packs-reducer";
import SuperButton from "../../../../../common/buttons/c2-SuperButton/SuperButton";

export const CardsFilter = memo(() => {

    const minCardsCount = useAppSelector(state => state.packs.minCardsCount)
    const maxCardsCount = useAppSelector(state => state.packs.maxCardsCount)
    const sortPacks = useAppSelector(state => state.packs.sortPacks)
    const pageCount = useAppSelector(state => state.packs.pageCount)
    const page = useAppSelector(state => state.packs.page)

    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const dispatch = useAppDispatch()

    const changeMinValueCount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setErrorMessage(null)
        let value = +e.currentTarget.value;
        if (!isFinite(+value)) return;
        if (value > maxCardsCount) {
            setErrorMessage('Min value must be less then Max value')
        } else {
            dispatch(setMinCardsFilterValueAC(value))
        }
    }

    const changeMaxValueCount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setErrorMessage(null)
        let value = +e.currentTarget.value
        if (!isFinite(+value)) return;
        if (value > 110) {
            setErrorMessage('Max number of cards is 110')
        } else {
            dispatch(setMaxCardsFilterValueAC(value))
        }
    }

    return (
        <div className={style.userProfile__params}>
            <h4>Number of cards</h4>
            <div className={style.userProfile__params_inputs}>
                <input
                    className={style.userProfile__params_input}
                    type='number'
                    value={Number(minCardsCount).toString()}
                    onChange={changeMinValueCount}
                    placeholder='от'
                />
                <input
                    className={style.userProfile__params_input}
                    type='number'
                    value={Number(maxCardsCount).toString()}
                    onChange={changeMaxValueCount}
                    placeholder='до'
                />
            </div>
            <SuperButton onClick={() => dispatch(getPacksTC(sortPacks, page, pageCount))}>
                Filter
            </SuperButton>
            {
                errorMessage && <div>{errorMessage}</div>
            }
        </div>
    )
})