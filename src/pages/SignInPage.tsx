import {useEffect} from "react";
import {gapi} from "gapi-script";
import {LoginButton} from "../components/LoginButton.tsx";
import {AppBar, Box, Container, Toolbar, Typography} from "@mui/material";

export function SignInPage () {
    const clientId = "673042186693-2m5j2elqlhnukhflpjf4871goq384cb9.apps.googleusercontent.com";

    useEffect(() => {
        function start () {
            gapi.client.init({
                clientId: clientId,
                scope: ""
            })
        }

        gapi.load('client:auth2', start);
    }, []);

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="success">
                    <Toolbar >
                        <Typography sx={{flexGrow: 1, cursor: "pointer"}}></Typography>
                        <Typography variant ="h5" sx={{flexGrow: 1}}>
                            CyberCare
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>

                <div style={{ borderRadius: 8, backgroundColor: "green", padding: 48, marginTop: 48, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <div style={{backgroundColor: "#ecebeb", borderRadius: 8, padding: 32, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                        <h3 style={{ fontFamily: "sans-serif"}}>Benvenuto su CyberCare!</h3>
                        <LoginButton />
                    </div>

                </div>

            </Container>
        </div>

    )
}