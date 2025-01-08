import TodoComponent from "../to_do_component/TodoComponent.tsx";
import {FC, useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {getUsers} from "../../services/api-service/api-service.ts";

const TodoComponents: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(()=>{
        getUsers()
            .then(response =>{
                setUsers(response.todos);
            })
    }, [])
    return (
        users.map(user => <TodoComponent key={user.id} user={user}/>)
    )
}
export default TodoComponents;