import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import EventDiscoveryPage from "../pages/EventDiscovery.page";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [{
            path: '/all-events/:city',
            element: <EventDiscoveryPage/>,
        }],
    }
]);