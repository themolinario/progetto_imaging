import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import {LogoutButton} from "../components/LogoutButton.tsx";
import {useNavigate} from "react-router-dom";


export function NavBar () {
    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="success">
                <Toolbar>
                    <Typography sx={{flexGrow: 1, cursor: "pointer"}}></Typography>
                    <Typography variant ="h5" sx={{flexGrow: 1, cursor: "pointer", marginLeft: 13}} onClick={() => navigate("/home")}>
                        CyberCare
                    </Typography>
                    <LogoutButton />
                </Toolbar>
            </AppBar>
        </Box>
    );
}