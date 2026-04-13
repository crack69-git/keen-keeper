import { createBrowserRouter } from "react-router";
import App from "../App";
import Homepage from "../Homepage/Homepage";
import MainLayout from "../LayoutMain/MainLayout";
import TimeLine from "../Timeline/Timeline";
import StatSection from "../StatSection/StatSection";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Homepage></Homepage>
            },
            {
                path: "/timeline",
                element: <TimeLine></TimeLine>
            },
            {
                path: "/stats",
                element: <StatSection></StatSection>
            }
        ]
    },
]);
export default router;