import {createBrowserRouter} from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import UsersPage from "./pages/UsersPage.tsx";

export const router = createBrowserRouter([
    {path: "/", element: <MainPage/>,
        children:[
            {path: "/users", element: <UsersPage/>}
        ]
    }
])