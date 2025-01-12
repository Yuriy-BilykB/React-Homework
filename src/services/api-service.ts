import {IUser} from "../models/IUser.ts";
import {urls} from "../constants/url.ts";
import {IPost} from "../models/IPost.ts";
import {ICart} from "../models/ICart.ts";

export const ApiService = {
    getUsers: async (): Promise<IUser[]> => {
        const response = await fetch(urls.allUsers);
        const data = await response.json();
        return data.users;
    },
    getPosts: async (): Promise<IPost[]> => {
    return await fetch(urls.posts)
        .then((res) => res.json())
},
     getCartUser: async (userId: number): Promise<ICart> => {
         const response = await fetch(urls.getCartUser(userId));
         return response.json();
     }
};



