import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import EventDiscoveryPage from "../pages/EventDiscovery.page";
import ErrorPage from "../pages/Error.page";
import EventInsightPage from "../pages/EventInsight.page";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/all-events/:city',
                element: <EventDiscoveryPage />,
            },
            {
                path: '/:slug/event',
                element: <EventInsightPage />,
            },
            {
                path: '*',
                element: <ErrorPage />,
            },
        ],
    }
]);