import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Home/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import CreateTask from "../Pages/CreateTask/CreateTask";
import ToDoList from "../Pages/ToDoList/ToDoList";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root> ,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "createTask",
                element: <CreateTask></CreateTask>
            },
            {
                path: "toDoList",
                element: <ToDoList></ToDoList>
            }
        ]
    }
])

export default router;