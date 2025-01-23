import { useFetch } from "../hooks/useFetch";
import { IUser } from "../models/IUser";
import User from "./User.tsx";
const Users = () => {
    const users = useFetch<{ users: IUser[] }>("https://dummyjson.com/users");
    console.log(users?.users)
    return (
        <>
            {users?.users.map((user) => (
                <User key={user.id} user={user} />
            ))}
        </>
    );
};

export default Users;