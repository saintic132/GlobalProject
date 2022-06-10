import React, {ChangeEvent, memo} from 'react';
import style from "./PacksFilter.module.css";
import SuperInputText from "../../../../../common/buttons/c1-SuperInputText/SuperInputText";
import SuperButton
    from "../../../../../common/buttons/c2-SuperButton/SuperButton";
import {useAppDispatch, useAppSelector} from "../../../../../store/store";
import {
    setMaxAC,
    setMinAC
} from "../../../../../store/reducers/packsList-reducer";

export const PacksFilter = memo(() => {
    const dispatch=useAppDispatch()
    const min = useAppSelector(state => state.packsList.helpers.min)
    const max = useAppSelector(state => state.packsList.helpers.max)

    const onChangeRangeFrom = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMinAC(+e.currentTarget.value))
    }
    const onChangeRangeTo = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxAC(+e.currentTarget.value))
        console.log(e.currentTarget.value)
    }

    return (
        <div className={style.packsFilter__params}>
            <h4>Show packs cards</h4>
            <div className={style.packsFilter__params_btn}>
                <SuperButton className={style.packsFilter__btn}>My</SuperButton>
                <SuperButton className={`${style.packsFilter__btn} ${style.grey}`}>All</SuperButton>
            </div>
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
