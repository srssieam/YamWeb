
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import Items from "../Pages/FoodItems/Items";
import AddFoodItem from "../Pages/AddFoodItem";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Services from "../Pages/Services";
import Team from "../Pages/Team";
import FoodDetails from "../Pages/FoodItems/FoodDetails";
import UseAxios from "../hooks/UseAxios";
import PurchasFood from "../Pages/PurchasFood";
import MyOrderedFood from "../Pages/myOrderedFood";
import PrivateRoute from "./PrivateRoute";
const axios = UseAxios();

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'about',
                element:<About></About>
            },
            {
                path:'items',
                element:<Items></Items>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:'services',
                element:<Services></Services>
            },
            {
                path:'team',
                element:<Team></Team>
            },
            {
                path:'addfooditem',
                element:<AddFoodItem></AddFoodItem>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'foodDetails/:id',
                element:<FoodDetails></FoodDetails>,
                loader:({params})=>axios.get(`/foodItems/${params.id}`)
            },
            {
                path:'purchase/:id',
                element:<PurchasFood></PurchasFood>,
                loader:({params})=>axios.get(`/foodItems/${params.id}`)
            },
            {
                path:'myOrderedFood',
                element:<PrivateRoute><MyOrderedFood></MyOrderedFood></PrivateRoute>
            }
        ]
    }
])

export default Routes;