import {IUser} from "../../models/IUser.ts";
import {FC, useEffect, useState} from "react";

import {ApiService} from '../../services/api-service.ts'
import UserComponent from "./UserComponent.tsx";

const UsersComponent: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        ApiService.getUsers()
            .then((data) => {
                setUsers(data)
            });

    }, [])
    return (
        <div>
            {users.map((user: IUser) => (
                <UserComponent key={user.id} user={user} />
            ))}
        </div>
    );
}
export default UsersComponent