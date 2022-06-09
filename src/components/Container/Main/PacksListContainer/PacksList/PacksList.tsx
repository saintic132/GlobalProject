import React from 'react';
import SuperInputText from "../../../../../common/buttons/c1-SuperInputText/SuperInputText";
import style from "./PacksList.module.css";
import {PackList} from "./PackList/PackList";
import SuperButton
    from "../../../../../common/buttons/c2-SuperButton/SuperButton";

export const PacksList = () => {
    return (
        <>
            <h2>
                Packs list
            </h2>
            <div className={style.packsList__container}>
                <SuperInputText
                    className={style.packsList__body_input_search}
                    placeholder="Search..."
                    // value={email}
                />
                <SuperButton className={style.packsList__btn}>Add new pack</SuperButton>
            </div>
            {/*Компонента с отрисовкой Карточек*/}
            <PackList/>
        </>
    )
}