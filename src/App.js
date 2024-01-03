import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header.js";
import About from "./components/About.js";
import Body from "./components/Body.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children : [
            {
                path:"/",
                element: <Body />
            },
            {
                path:"/about",
                element: <About />
            },
            {
                path:"/contact",
                element: <Contact />
            },
            {
                path:"/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

//root.render(heading);
root.render(<RouterProvider router={ appRouter }/>)