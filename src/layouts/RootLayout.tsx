import Box from "@mui/material/Box"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
    return (
        <Box id='main'>
            <Outlet/>
        </Box>
    )
};

export default RootLayout;