import {useLocation} from "react-router-dom";
import {IUser} from "../../models/IUser.ts";
import CartsComponent from "../../components/cart-component/CartsComponent.tsx";
const SingleUserDetailsPage = () => {
    const {state} = useLocation();
    const user = state as IUser;
    console.log(user.id)
    return (
        <div>
            <CartsComponent userId={user.id} />
        </div>
    );
};

export default SingleUserDetailsPage;