import style from "./PacksFilter.module.css";
import React from "react";

type PropsType = {
    myAllValue: boolean
    callback: (myAllValue: boolean) => void
}

export const MyAll = (props: PropsType) => {
    return (
        <div className={style.packsFilter__params_blocks}>
            <div className={props.myAllValue ?`${style.packsFilter__block} ${style.grey}` : style.packsFilter__block} onClick={() => props.callback(true)}>My</div>
            <div className={props.myAllValue ? style.packsFilter__block : `${style.packsFilter__block} ${style.grey}`} onClick={() => props.callback(false)}>All</div>
        </div>
    )
}