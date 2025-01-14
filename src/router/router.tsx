import {createBrowserRouter} from "react-router-dom";
import CarsComponent from "../components/cars-components/CarsComponent.tsx";
import MainPage from "../pages/MainPage.tsx";
export const router = createBrowserRouter([
    {path: "/", element: <MainPage/>,
        children:[
            {path: "/cars", element: <CarsComponent/>}
        ]
    }
])