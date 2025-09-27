import {Route, RouterProvider, Routes} from "react-router";
import {AppLayout} from "@app/layouts/AppLayout";

import {MainPage} from "@pages/MainPage";
import {ResourcesPage} from "@pages/ResourcesPage";

import {HashRouter} from "react-router";

export const AppRouter = () => {
    return (
        <HashRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route index element={<MainPage />} />
                    <Route path="/resources/:categoryId" element={<ResourcesPage />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}