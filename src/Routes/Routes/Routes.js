import Products from "../../pages/Products/Products";

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
                element: <Products></Products>
            }

        ]
    }
])

export default router;