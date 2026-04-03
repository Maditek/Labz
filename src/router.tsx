import { createBrowserRouter } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { CatalogPage } from "./pages/CatalogPage"
import { NotFoundPage } from "./pages/NotFoundPage";
import { Layout } from "./layouts/Layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <LandingPage /> },
            { path: "catalog", element: <CatalogPage /> },
            { path: "*", element: <NotFoundPage /> },
        ],
    }
]);
