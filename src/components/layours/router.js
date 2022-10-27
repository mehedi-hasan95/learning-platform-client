import { createBrowserRouter } from "react-router-dom";
import Blog from "../pages/Blog";
import Course from "../pages/Course";
import Faq from "../pages/Faq";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Main from "./Main";
import Error from "../pages/Error";
import CourseDetails from "../pages/CourseDetails";
import PrivateRoute from "./PrivateRoute";
import Checkout from "../pages/Checkout";

export const router = createBrowserRouter([
    {path: '/', element: <Main></Main>,
    children: [
        {path: '/', element: <Home></Home>},
        {path: 'home', element: <Home></Home>},
        {path: 'course', element: <Course></Course>},
        {path: 'faq', element: <Faq></Faq>},
        {path: 'blog', element: <Blog></Blog>},
        {path: 'login', element: <Login></Login>},
        {path: 'register', element: <Register></Register>},
        {path: 'checkout', element: <PrivateRoute><Checkout></Checkout></PrivateRoute>},
        {path: '*', element: <Error></Error>},
        {
            path: '/course/:id', element: <CourseDetails></CourseDetails>,
            loader: ({ params }) => fetch(`https://lerning-platform-server-side-mehedititu.vercel.app/categories/${params.id}`),
        },
    ],
}
]);