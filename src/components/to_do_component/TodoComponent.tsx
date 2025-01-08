import {FC} from "react";
import {IUser} from '../../models/IUser.ts'
type UserPropType = {
    user: IUser
}
const TodoComponent: FC<UserPropType> = ({user}) => {
    return (
        <div key={user.id}>
            <p>{user.id}</p>
            <p>{user.todo}</p>
            <p>{user.completed}</p>
            <p>{user.userId}</p>
        </div>
    )
}
export default TodoComponent;