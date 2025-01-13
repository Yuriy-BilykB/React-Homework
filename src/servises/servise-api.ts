import {IUser} from "../models/IUser.ts";
const baseUrl = import.meta.env.VITE_API_URL;
console.log("Base URL: ", baseUrl);
export const getUsers = async (): Promise<{users: IUser[]}> => {
    const response = await fetch(baseUrl);
    console.log(response)
    return await response.json();


}