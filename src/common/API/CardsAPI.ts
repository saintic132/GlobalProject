import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true,
})

export const cardsAPI = {
    getCards (cardsPack_id: string) {
        return instance.get<GetDataType>(`cards/card?cardsPack_id=${cardsPack_id}`)
    },
    addCards () {

    },
    updateCards () {

    },
    deleteCards () {

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

// export type CardType = {
//     _id: string;
//     cardsPack_id: string;
//     user_id: string;
//
//     answer: string;
//     question: string;
//     grade: number;
//     shots: number;
//
//     questionImg: string;
//     answerImg: string;
//     answerVideo: string;
//     questionVideo: string;
//
//     comments: string;
//
//     type: string;
//     rating: number;
//     more_id: string;
//
//     created: string;
//     updated: string;
// }