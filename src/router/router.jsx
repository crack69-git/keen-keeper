import { createBrowserRouter } from "react-router";
import Homepage from "../Homepage/Homepage";
import MainLayout from "../LayoutMain/MainLayout";
import FriendDetail from "../FriendDetail/FriendDetail";
import Timeline from "../Timeline/Timeline.jsx";
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
                element: <Timeline></Timeline>
            },
            {
                path: "/stats",
                element: <StatSection></StatSection>
            },
            {
                path: '/friends/:friendId',
                element: <FriendDetail />,
                loader: () => fetch('/myData.json')
            }
        ]
    },
]);
export default router;