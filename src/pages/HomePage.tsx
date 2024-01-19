import {Button, Container} from "@mui/material";
import {useAtomValue} from "jotai";
import {userAtom} from "../atoms/userAtom.tsx";

export function HomePage () {
    const user = useAtomValue(userAtom);

    return (
    <Container style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <h2 style={{ fontFamily: "sans-serif"}}>Benvenuto {user?.name}</h2>
        <p style={{fontFamily: "sans-serif"}}>Clicca qui per effettuare la scansione tramite il sensore:</p>
        <Button variant="contained">Scansiona</Button>
    </Container>
    )
}