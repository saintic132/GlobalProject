import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true,
})

export const userAPI = {
    editProfile(name: string, avatar?: string) {
        return instance.put<{ name: string, avatar?: string }, AxiosResponse<ResponseType<UpdatedUser>>>('/auth/me', {
            name,
            avatar
        })
    }
}

type UpdatedUser = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number;
    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean
    rememberMe: boolean
}

type ResponseType<D = {}> = {
    token: string
    tokenDeathTime: number
    updatedUser: D
}