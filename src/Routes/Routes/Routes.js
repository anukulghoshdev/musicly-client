import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";
import About from "../../pages/About/About";
import Blogs from "../../pages/Blogs/Blogs";
import AddPrducts from "../../pages/DashBoard/AddPrducts/AddPrducts";
import AllBuyers from "../../pages/DashBoard/AllBuyers/AllBuyers";
import AllUsers from "../../pages/DashBoard/AllUsers/AllUsers";
import DashboardWelcomePage from "../../pages/DashBoard/DashboardWelcomePage/DashboardWelcomePage";
import MyBuyers from "../../pages/DashBoard/MyBuyers/MyBuyers";
import MyOrders from "../../pages/DashBoard/MyOrders/MyOrders";
import MyProducts from "../../pages/DashBoard/MyProducts/MyProducts";
import Payment from "../../pages/DashBoard/Payment/Payment";
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
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/category/:Category_name',
                loader:({params})=>fetch(`https://musicly-server-anukulghoshdev.vercel.app/category/${params.Category_name}`),
                element: <Products></Products>
            }, 
            {
                path: '/login', 
                element: <Login></Login>
            }, 
            {
                path: '/register',
                element: <Register></Register> 
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/about',
                element: <About/>
            }

        ]
    }, 
    {
        path: '/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        // errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/dashboard',
                element: <PrivateRoute><DashboardWelcomePage></DashboardWelcomePage></PrivateRoute>
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
                path: '/dashboard/myproducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/myBuyers',
                element:  <SellerRoute><MyBuyers></MyBuyers></SellerRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({params})=>fetch(`https://musicly-server-anukulghoshdev.vercel.app/orders/${params.id}`)
            }
        ]
    }
])

export default router;