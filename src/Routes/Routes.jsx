import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import MyToys from "../Pages/MyToys/MyToys";
import ShopByCategoryToyDetails from "../Pages/ShopByCategoryToyDetails/ShopByCategoryToyDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signUp',
                element: <SignUp />
            },
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: 'addToy',
                element: <PrivateRoute><AddToy/></PrivateRoute>
            },
            {
                path : 'allToys',
                element : <AllToys/>
            },
            {
                path : 'toyDetails/:id',
                element : <PrivateRoute><ToyDetails/></PrivateRoute>,
                loader : ({params}) => fetch(`https://animagic-action-figure-server.vercel.app/toyDetails/${params.id}`)
            },
            {
                path : 'myToys',
                element : <PrivateRoute><MyToys/></PrivateRoute>
            },
            {
                path : 'categoryToyDetails/:id',
                element: <PrivateRoute><ShopByCategoryToyDetails/></PrivateRoute>,
                loader : ({params}) => fetch(`https://animagic-action-figure-server.vercel.app/categoryToyDetails/${params.id}`)
            }
        ]
    },
    {
        path : '*',
        element : <ErrorPage/>
    }
]);

export default router;