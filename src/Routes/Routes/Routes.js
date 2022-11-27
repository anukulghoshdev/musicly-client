import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";
import AddPrducts from "../../pages/DashBoard/AddPrducts/AddPrducts";
import AllBuyers from "../../pages/DashBoard/AllBuyers/AllBuyers";
import AllUsers from "../../pages/DashBoard/AllUsers/AllUsers";
import DashboardWelcomePage from "../../pages/DashBoard/DashboardWelcomePage/DashboardWelcomePage";
import MyBuyers from "../../pages/DashBoard/MyBuyers/MyBuyers";
import MyOrders from "../../pages/DashBoard/MyOrders/MyOrders";
import MyProducts from "../../pages/DashBoard/MyProducts/MyProducts";
import ReportedItems from "../../pages/DashBoard/ReportedItems/ReportedItems";
import Products from "../../pages/Products/Products";
import Login from "../../pages/RegLog/Login/Login";
import Register from "../../pages/RegLog/Register/Register";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

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
                path: '/category/:Category_name',
                loader:({params})=>fetch(`http://localhost:5000/category/${params.Category_name}`),
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
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path: '/dashboard',
                element: <DashboardWelcomePage></DashboardWelcomePage>
            },
            {
                path:'/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allUser',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/reporteditems',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            },



            // seller routes
            {
                path: '/dashboard/addProducts',
                element: <SellerRoute><AddPrducts></AddPrducts></SellerRoute>
            },
            {
                path: '/dashboard/myproduct',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/myBuyers',
                element:  <SellerRoute><MyBuyers></MyBuyers></SellerRoute>
            }
        ]
    }
])

export default router;