import {FunctionComponent} from "react";
import Menu from "../components/menu-component/Menu.tsx";
import {Outlet} from "react-router-dom";
const MainLayout: FunctionComponent = () => {
   return (
       <div>
          <Menu/>
          <hr/>
          <Outlet/>
       </div>

   )
}
export default MainLayout;