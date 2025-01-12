import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import UsersPage from "./pages/users-page/users-page.tsx";
import PostsComponent from "./components/posts-components/PostsComponent.tsx";
import SingleUserDetailsPage from "./pages/users-page/SingleUserDetailsPage.tsx";
const router = createBrowserRouter([
    {
        path:'/',element: <MainLayout/>,
        children: [
            {path:'/users-page',element: <UsersPage/>},
            {path: 'users-page/details', element: <SingleUserDetailsPage/>},
            {path:'/posts-page',element: <PostsComponent/>},
        ]
    }
])

createRoot(document.getElementById('root')!).render(<RouterProvider router={router}/>)
