import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home/Home";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main/Main";
import About from "../../Pages/About/About/About";
import AddCard from "../../Pages/AddCard/AddCard";
import AllUser from "../../Pages/AllUser/AllUser";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Details from "../../Pages/Details/Details";
import MoreProducts from "../../Pages/MoreProducts/MoreProducts";
import WishList from "../../Pages/WishList/WishList";
import Error from "../../Shared/Error/Error";
import Login from "../../Shared/Login/Login";
import SignUp from "../../Shared/SignUp/SignUp";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [

            { path: '/', element: <Home></Home> },
            { path: '/login', element: <Login></Login> },
            { path: '/signUp', element: <SignUp></SignUp> },
            { path: '/moreProduct', element: <MoreProducts></MoreProducts> },
            { path: '/about', element: <About></About> },
            { path: '/contact', element: <Contact></Contact> },
            { path: '/blog', element: <Blog></Blog>},

            {
                path: '/details/:id', element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/moreProducts/${params.id}`)
            },


            { path: '/addCard', element: <PrivateRouter><AddCard></AddCard></PrivateRouter> },
        ]
    },
    // dashboard Layout
    {
        path: '/dashboard', element: <PrivateRouter><DashboardLayout></DashboardLayout></PrivateRouter>,
        children: [
            // { path: '/dashboard', element: <Dashboard></Dashboard> },
            { path: '/dashboard', element: <AllUser></AllUser> },
            { path: '/dashboard/wishlist', element: <WishList></WishList> },
        ]
    },




    { path: '/*', element: <Error></Error> }
])