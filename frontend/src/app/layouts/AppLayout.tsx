import { Sidebar } from "@widgets/app/Sidebar";
import {Box} from "@mui/material";
import { Outlet } from "react-router";

export const AppLayout = () => {
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <Sidebar />

                <Box sx={{width: "calc(100% - 250px)", p: 3,}}>
                    <Outlet />
                </Box>
            </Box>
        </>
    );
}