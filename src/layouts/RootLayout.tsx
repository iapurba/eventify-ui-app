import Box from "@mui/material/Box"
import { Outlet } from "react-router-dom"
import GlobalHeader from "./GlobalHeader/GlobalHeader";
import Disclaimer from "./Disclaimer/Disclaimer";
import { constants } from "../utils/constants";

const RootLayout = () => {
    return (
        <Box id='main'>
            <GlobalHeader />
            <Disclaimer message={constants.DISCLAIMER_MESSAGE} />
            <Outlet />
        </Box>
    )
};

export default RootLayout;