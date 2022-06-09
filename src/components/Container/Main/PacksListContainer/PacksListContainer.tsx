import React from 'react';
import style from './PacksListContainer.module.css'
import {Redirect} from "../../../../common/Redirect/Redirect";
import {CardsFilter} from "../Profile/CardsFilter/CardsFilter";
import {PackList} from "./PacksList/PackList/PackList";
import {PacksList} from "./PacksList/PacksList";

type ProfilePropsType = {
    isLoginIn: boolean
}

const PacksListContainer: React.FC<ProfilePropsType> = () => {
    return (
        <div className={style.packsList__container}>
            <div className={style.packsList__body}>
                <div className={style.packsList__body_profile}>
                    <CardsFilter/>
                </div>
                <div className={style.packsList__body_main}>
                    <PacksList/>
                </div>
            </div>
        </div>
    );
};

export default Redirect(PacksListContainer)