import MenuComponent from "../components/MenuComponent.tsx";
import {Outlet} from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <MenuComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};
export default MainPage;