import { createBrowserRouter } from "react-router";
import App from "../App";
import Homepage from "../Homepage/Homepage";
import MainLayout from "../LayoutMain/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Homepage></Homepage>
            }
        ]
    },
]);
export default router;