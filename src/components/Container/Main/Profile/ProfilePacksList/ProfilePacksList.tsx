import React from 'react';
import SuperInputText from "../../../../../common/buttons/c1-SuperInputText/SuperInputText";
import style from "./ProfilePacksList.module.css";
import {PackList} from "./Packs/PackList";
import search from '../../../../../assets/img/search_bar/search.png'

export const ProfilePacksList = () => {
    return (
        <div className={style.packs__body}>
            <h2>
                My packs list
            </h2>
            <SuperInputText
                className={style.profile__body_input_search}
                placeholder="Search..."
                // value={email}
            />
            <img
                className={style.profile__body_img_search}
                src={search}
                alt="search"/>
            {/*Компонента с отрисовкой Карточек*/}
            <PackList/>
        </div>
    )
}