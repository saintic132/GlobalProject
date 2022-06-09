import React from 'react';
import SuperInputText from "../../../../../common/buttons/c1-SuperInputText/SuperInputText";
import style from "./PacksList.module.css";
import {PackList} from "./PackList/PackList";

export const PacksList = () => {
    return (
        <>
            <h2>
                Packs list
            </h2>
            <SuperInputText
                className={style.profile__body_input_search}
                placeholder="Search..."
                // value={email}
            />
            {/*Компонента с отрисовкой Карточек*/}
            <PackList/>
        </>
    )
}