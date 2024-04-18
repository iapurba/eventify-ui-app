import { Box, Toolbar } from "@mui/material";
import { StyledAppBar } from "./GlobalHeader.styles";
import MenuButton from "../../common/Buttons/MenuButton/MenuButton";
import { LocationIcon, SearchIcon } from "../../common/Icons/MuiSvgIcons";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';

const GlobalHeader: React.FC = () => {
    return (
        <StyledAppBar>
            <Toolbar>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexGrow: 1
                }}>
                    <MenuButton
                        label={'Events In Kolkata'}
                        startIcon={<LocationIcon />}
                        active
                        onClick={() => { }}
                    />
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                }}>
                    <MenuButton
                        startIcon={<SearchIcon />}
                        onClick={() => { }}
                    />
                    <MenuButton
                        label={'Kolkata'}
                        startIcon={<LocationIcon />}
                        endIcon={<KeyboardArrowDownIcon />}
                        onClick={() => { }}
                    />
                    <MenuButton
                        startIcon={<PersonOutlineRoundedIcon />}
                        onClick={() => { }}
                    />
                </Box>
            </Toolbar>
        </StyledAppBar>
    )
};

export default GlobalHeader;