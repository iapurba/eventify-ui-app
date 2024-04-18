import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [{
            path: '/all-events/:city',
            element: null,
        }],
    }
]);