
import {createBrowserRouter, RouterProvider} from "react-router"
import PublicProtected from "./protected/PublicProtected"
import AuthLayout from "../app/layout/AuthLayout"
import LoginPage from "../Features/auth/ui/pages/LoginPage"
import RegisterPage from "../Features/auth/ui/pages/RegisterPage"
import MainProtected from "./protected/MainProtected"
import MainLayout from "../app/layout/MainLayout"
import HomePage from "../shared/ui/pages/HomePage"
import OrderPage from "../Features/order/ui/pages/OrederPage"
import CartPage from "../Features/cart/ui/pages/CartPages"
import ProductPage from "../Features/products/ui/pages/ProductPage"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { hydrateUserAction } from "../Features/auth/state/authAction"
import AboutPage from "../shared/ui/pages/AboutPage"

const AppRoutes = () => { 
    let dispatch = useDispatch()

    useEffect(()=>{
        dispatch(hydrateUserAction())
    },[dispatch])


    let router = createBrowserRouter([
        {
            path:"/",
            element:<PublicProtected/>,
            children:[
                {
                    path:"",
                    element: <AuthLayout/>,
                    children :[
                        {
                            path:"",
                            element:<LoginPage/>,
                        },
                        {
                            path:"register",
                            element:<RegisterPage/>,
                        }
                    ],
                },
            ],

        },



        {
            path:"",
            element: <MainProtected/>,
            children:[
                {
                    path:"",
                    element:<MainLayout/>,
                    children:[
                        {
                            path:"/main",
                            element: <HomePage/>,
                        },
                          {
                            path:"product",
                            element: <ProductPage/>,
                        },
                          {
                            path:"/cart",
                            element: <CartPage/>,
                        },
                          {
                            path:"/orders",
                            element: <OrderPage/>,
                        },
                         {
                            path:"/about",
                            element: <AboutPage/>,
                        },
                    ],
                },
            ],
        },
    ])




  return <RouterProvider router={router}/>
}

export default AppRoutes
