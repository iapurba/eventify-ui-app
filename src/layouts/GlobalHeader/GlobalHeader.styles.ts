import { AppBar, styled } from "@mui/material";

export const StyledAppBar = styled(AppBar)`
    height: 64px;
    background-color: #0c172f;
    -webkit-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 120;
`;