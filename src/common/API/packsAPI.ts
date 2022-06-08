import {instance} from "./settingsAPI";
import {AxiosResponse} from "axios";
import {CardPacksType} from "../../store/reducers/packs-reducer";

export const packsList = {
    getPacks(sortPacks: string = '0updated', user_id?: string) {
        return instance.get<null, AxiosResponse<ResponseType<CardPacksType[]>>>('/cards/pack', {params: {sortPacks, user_id}})
    }
}

type ResponseType<D = []> = {
    cardPacks: D
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
    token: string
    tokenDeathTime: number
}