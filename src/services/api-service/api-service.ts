import { IUser } from '../../models/IUser.ts'
export const getUsers = async (): Promise<IUser[]> => {
    const users = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json());
    return users;
}


