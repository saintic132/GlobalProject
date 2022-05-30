import React from 'react';
import style from './PackList.module.css'

export const PackList = () => {
    return (
        <div className={style.packList__container}>
            <div>
                <span>Name</span>
                <span>Cards</span>
                <span>Last Updated</span>
                <span>Created by</span>
                <span>Actions</span>
            </div>
        </div>
    )
}