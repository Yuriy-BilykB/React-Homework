import {useEffect, useState} from "react";
import {IUser} from "../models/IUser.ts";
import {getUsers} from "../servises/servise-api.ts";
import UserComponent from "./UserComponent.tsx";
import {useSearchParams} from "react-router-dom";
const UsersComponent = () => {

    const [searchParams] = useSearchParams({page: '1'});
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
      const currentPage =  searchParams.get('page') || '1';
        getUsers(currentPage)
            .then(({users}) =>{
                console.log(users)
                setUsers(users);
            })

    },[searchParams])

    return (
            users.map((user: IUser) => (<UserComponent key={user.id} user={user}/>))
    );
};
export default UsersComponent;
