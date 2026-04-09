import { createBrowserRouter } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { CatalogPage } from "./pages/CatalogPage"
import { NotFoundPage } from "./pages/NotFoundPage";
import { Layout } from "./layouts/Layout";
import { CoursePage } from "./pages/CoursePage";
import { mockCourses } from "./data/MockCourses";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <LandingPage /> },
            { path: "catalog", element: <CatalogPage courses = {mockCourses}/> },
            { path: "courses/:courseId", element: <CoursePage/>},
            { path: "*", element: <NotFoundPage /> },
        ],
    }
]);
