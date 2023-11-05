
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import Items from "../Pages/FoodItems/Items";
import AddFoodItem from "../Pages/AddFoodItem";


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
                path:'addfooditem',
                element:<AddFoodItem></AddFoodItem>
            }
        ]
    }
])

export default Routes;