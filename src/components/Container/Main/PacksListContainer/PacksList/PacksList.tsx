import React, {useEffect} from 'react';
import style from './PacksList.module.css'
import {useAppDispatch, useAppSelector} from "../../../../../store/store";
import SuperButton from "../../../../../common/buttons/c2-SuperButton/SuperButton";
import {packListTC} from "../../../../../store/reducers/packsList-reducer";

export const PacksList = () => {
    const dispatch=useAppDispatch()
    const packs = useAppSelector(state => state.packsList)
    console.log(packs)
    useEffect(()=>{
        dispatch(packListTC())
    }, [])

    // const [packs, setPacks] = useState([
    //     {id: 1, name: 'Pack name', cards: 4, updates: '18.03.2021', created: 'Ivan Ivanov'},
    //     {id: 1, name: 'Pack name', cards: 4, updates: '18.03.2021', created: 'Ivan Ivanov'},
    //     {id: 1, name: 'Pack name', cards: 4, updates: '18.03.2021', created: 'Ivan Ivanov'},
    //     {id: 1, name: 'Pack name', cards: 4, updates: '18.03.2021', created: 'Ivan Ivanov'},
    //     {id: 1, name: 'Pack name', cards: 4, updates: '18.03.2021', created: 'Ivan Ivanov'},
    // ]);

    return (
        <div className={style.packList__container}>
            <div className={style.packList__row}>
                <span className={style.packList__name}>Name</span>
                <span className={style.packList__cards}>Cards</span>
                <span className={style.packList__updates}>Last Updated</span>
                <span className={style.packList__create}>Created by</span>
                <span className={style.packList__action}>Actions</span>
            </div>

            {/*Готовая таблица. Раскоментировать после получения данных*/}

            {
                packs && packs.map(p => {
                    return (
                        <div
                            key={p._id}
                            className={style.packList__list}
                        >
                            <span className={style.packList__name}>{p.name}</span>
                            <span className={style.packList__cards}>{p.cardsCount}</span>
                            <span className={style.packList__updates}>{p.updated}</span>
                            <span className={style.packList__create}>{p.created}</span>
                            <span className={style.packList__action}>
                                <SuperButton className={style.packList__button_delete}>
                                    Delete
                                </SuperButton>
                                <SuperButton className={style.packList__button_edit_learn}>
                                    Edit
                                </SuperButton>
                                <SuperButton className={style.packList__button_edit_learn}>
                                    Learn
                                </SuperButton>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}