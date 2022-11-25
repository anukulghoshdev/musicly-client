import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";
import Products from "../../pages/Products/Products";
import Login from "../../pages/RegLog/Login/Login";
import Register from "../../pages/RegLog/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: ErrorPage } = require("../../components/ErrorPage/ErrorPage");
const { default: Main } = require("../../Layouts/Main/Main");
const { default: Home } = require("../../pages/Home/Home/Home");

const router = createBrowserRouter([
    {
        path: '/', 
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            }, 
            {
                path: '/category/:id',
                loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`),
                element: <PrivateRoute><Products></Products></PrivateRoute>
            }, 
            {
                path: '/login', 
                element: <Login></Login>
            }, 
            {
                path: '/register',
                element: <Register></Register> 
            }

        ]
    }, 
    {
        path: '/dashboard',
        element:<DashboardLayout></DashboardLayout>
    }
])

export default router;