import {IUser} from "../models/IUser.ts";
const baseUrl = import.meta.env.VITE_API_URL;
export const getUsers = async (page: string): Promise<{users: IUser[]}> => {
    const limit = 30
    const skip: number = limit * (+page) - limit
    const response = await fetch(baseUrl + '/users' + '?skip=' + skip);
    console.log(response)
    return await response.json();
}