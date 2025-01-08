import {FC} from "react";
import {IUser} from '../../models/IUser.ts'
type UserPropType = {
    user: IUser
}
const TodoComponent: FC<UserPropType> = ({user}) => {
    return (
        <div>
            key={user.id}
            {user.title}
        </div>
    )
}
export default TodoComponent;