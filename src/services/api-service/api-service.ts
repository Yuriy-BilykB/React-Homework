import {IArray} from '../../models/IUser.ts'
const baseUrl = import.meta.env.VITE_API_URL;
export const getUsers = async (): Promise<IArray> => {
    const users = await fetch(baseUrl)
    const data: IArray = await users.json();
    return data;
}


