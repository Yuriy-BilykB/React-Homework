import {IUser} from "../models/IUser.ts";
import {FC} from "react";

type PropsUser = {
    user: IUser
}
const User: FC<PropsUser> = ({user}) => {
    console.log(user)
    return (
        <div>
            {user.firstName}
        </div>
    );
};

export default User;