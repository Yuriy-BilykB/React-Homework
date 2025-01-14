import {Outlet} from "react-router-dom";
import MenuComponent from "../components/menu-component/MenuComponent.tsx";

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