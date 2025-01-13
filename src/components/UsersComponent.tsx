import {useEffect, useState} from "react";
import {IUser} from "../models/IUser.ts";
import {getUsers} from "../servises/servise-api.ts";
import UserComponent from "./UserComponent.tsx";
const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getUsers()
            .then(({users}) =>{
                console.log(users)
                setUsers(users);
            })

    },[])

    return (
            users.map((user: IUser) => (<UserComponent key={user.id} user={user}/>))
    );
};
export default UsersComponent;
