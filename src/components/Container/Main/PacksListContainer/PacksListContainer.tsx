import React from 'react';
import style from './PacksListContainer.module.css'
import {Redirect} from "../../../../common/Redirect/Redirect";
import {CardsFilter} from "../Profile/CardsFilter/CardsFilter";
import {PacksList} from "./PacksList/PacksList";

type ProfilePropsType = {
    isLoginIn: boolean
}

const PacksListContainer: React.FC<ProfilePropsType> = () => {
    return (
        <div className={style.profile__container}>
            <div className={style.profile__body}>
                <div className={style.profile__body_profile}>


                    {/*Компонента с отрисовкой фильра по количеству карт*/}
                    <CardsFilter/>
                </div>
                <div className={style.profile__body_main}>

                    {/*Компонента с отрисовкой карточек*/}
                    <PacksList/>
                </div>
            </div>
        </div>
    );
};

export default Redirect(PacksListContainer)