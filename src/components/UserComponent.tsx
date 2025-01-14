import {FC} from "react";

import {IUser} from "../models/IUser.ts";
type PropsType = {
    user: IUser
}
const UserComponent:FC<PropsType> = ({user}) => {
    return (
        <div>
            {user.id}  {user.firstName}
        </div>
    )
}
export default UserComponent