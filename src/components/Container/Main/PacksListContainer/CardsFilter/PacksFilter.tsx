import React, {ChangeEvent, memo, useEffect, useState} from 'react';
import style from "./PacksFilter.module.css";
import SuperInputText from "../../../../../common/buttons/c1-SuperInputText/SuperInputText";
import SuperButton
    from "../../../../../common/buttons/c2-SuperButton/SuperButton";
import {useAppDispatch, useAppSelector} from "../../../../../store/store";
import {
    packListTC,
    setMaxAC,
    setMinAC, setMyAllValueAC
} from "../../../../../store/reducers/packsList-reducer";
import {MyAll} from "./MyAll";

export const PacksFilter = memo(() => {
    const dispatch=useAppDispatch()
    const min = useAppSelector(state => state.packsList.filters.min)
    const max = useAppSelector(state => state.packsList.filters.max)
    const myAllValue = useAppSelector(state => state.packsList.filters.myAllValue)

    const changeMyAllValueHandler = (myAllValue: boolean) => {
        dispatch(setMyAllValueAC(myAllValue))
    }
    const onChangeRangeFrom = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMinAC(+e.currentTarget.value))
    }
    const onChangeRangeTo = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxAC(+e.currentTarget.value))
    }

    return (
        <div className={style.packsFilter__params}>
            <h4>Show packs cards</h4>
            <MyAll myAllValue={myAllValue} callback={changeMyAllValueHandler}/>
            <h4>Number of cards</h4>
            <div className={style.packsFilter__params_inputs}>
                <SuperInputText
                    className={style.packsFilter__params_input}
                    placeholder='от'
                    type={"number"}
                    value={min}
                    onChange={onChangeRangeFrom}
                />
                <SuperInputText
                    className={style.packsFilter__params_input}
                    placeholder='до'
                    type={"number"}
                    value={max}
                    onChange={onChangeRangeTo}
                />
            </div>
        </div>
    )
})
