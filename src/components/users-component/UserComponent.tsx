import {FC} from "react";
import {IUser} from "../../models/IUser.ts";
import {Link} from "react-router-dom";

type UserPropType = {
    user: IUser
}
const UserComponent: FC<UserPropType> = ({user}) => {
    return (
        <div>
            <Link to="details" state={user}>
                {user.firstName} {user.lastName}
            </Link>
        </div>

    )
}
export default UserComponent
