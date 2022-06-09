import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true,
})

export const cardsAPI = {
    getCards (cardsPack_id: string) {
        return instance.get<GetDataType>(`cards/card?cardsPack_id=${cardsPack_id}&pageCount=1000`)
    },
    addCards (cardsPack_id: string) {
        return instance.post<CardItemType>('/cards/card', {
            card: {
                cardsPack_id,
                question: 'no question',
                answer: 'no answer',
                grade: 0,
                }
        })
    },
    updateCards () {

    },
    deleteCards (cardID: string) {
        return instance.delete(`/cards/card?id=${cardID}`)
    },
}

// 627e52dbf2959a00042c3c46 - id моей колоды



export type GetDataType = {
    cards: CardItemType[];

    error?: string;
}

export type CardsStateType = {
    cards: CardItemType[];
}

export type CardItemType = {
    answer: string
    cardsPack_id: string
    comments: string
    created: string
    grade: number
    more_id: string
    question: string
    questionImg: string
    rating: number
    shots: number
    type: string
    updated: string
    user_id: string
    __v: number
    _id: string
}
