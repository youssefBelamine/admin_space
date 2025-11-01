import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import  Home  from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "users",
                children: [
                    {
                        index: true,
                        element: <List />
                    },
                    {
                        path: ":userId",
                        element: <Single />
                    }
                ]
            }
        ]
    }
])

export default router;