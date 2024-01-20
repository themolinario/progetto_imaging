import {useEffect, useState} from "react";
import {gapi} from "gapi-script";
import {LoginButton} from "../components/LoginButton.tsx";
import {AppBar, Box, Button, Container, TextField, Toolbar, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

export function SignInPage () {
    const [medico, setMedico] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
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

    const error = username !== "marco" || password !== "123456";

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
                    <p>Sei un medico?</p>
                    <Button variant="contained" onClick={() => setMedico(true)}>Effettua l'accesso come medico</Button>
                    {medico && <div style={{backgroundColor: "#ecebeb", borderRadius: 8, padding: 32, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                        { <TextField label="username" value={username} onChange={(e) => setUsername(e.target.value)}/>}
                        { <TextField label="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>}
                        { <Button onClick={() => navigate("/home")} disabled={error}>Login</Button>}
                        { error && <p style={{color: "red"}}>Credenziali errate!</p>}
                    </div>}

                </div>

            </Container>
        </div>

    )
}