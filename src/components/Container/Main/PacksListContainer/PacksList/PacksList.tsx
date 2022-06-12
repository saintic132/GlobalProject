import React, {ChangeEvent} from 'react';
import SuperInputText from "../../../../../common/buttons/c1-SuperInputText/SuperInputText";
import style from "./PacksList.module.css";
import {PackList} from "./PackList/PackList";
import SuperButton
    from "../../../../../common/buttons/c2-SuperButton/SuperButton";
import {useAppDispatch, useAppSelector} from "../../../../../store/store";
import {
    setPackNameAC,
} from "../../../../../store/reducers/packsList-reducer";

export const PacksList = () => {
    const dispatch = useAppDispatch()
    const packName = useAppSelector(state => state.packsList.filters.packName)

    const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setPackNameAC(e.currentTarget.value))
    }

    return (
        <>
            <h2>
                Packs list
            </h2>
            <div className={style.packsList__container}>
                <SuperInputText
                    className={style.packsList__body_input_search}
                    placeholder="Search..."
                    type={'text'}
                    onChange={onchangeHandler}
                    value={packName}
                />
                <SuperButton className={style.packsList__btn}>Add new pack</SuperButton>
            </div>
            {/*Компонента с отрисовкой Карточек*/}
            <PackList/>
        </>
    )
}