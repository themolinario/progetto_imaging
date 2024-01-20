import {Button, Container, List, ListItem} from "@mui/material";
import {useAtomValue} from "jotai";
import {userAtom} from "../atoms/userAtom.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import ecg from "../assets/ecg.png";

export function HomePage () {
    const user = useAtomValue(userAtom);
    const [data, setData] = useState<number[]>([]);
    const [scan, setScan] = useState(false);

    const getData = async () => {
        const { data } = await axios.get(`http://localhost:80/data`);
        const newData = data.map((d: {_id: string, value: string}) => Number(d.value.substring(0, 2)));

        setData(newData);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
    <Container style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <h2 style={{ fontFamily: "sans-serif"}}>Benvenuto {user ? user?.name : "Dr. Molinari"}</h2>
        <p style={{fontFamily: "sans-serif"}}>Clicca qui per effettuare la scansione tramite il sensore:</p>
        <Button onClick={() => {setScan(true); getData()}} variant="contained">Scansiona</Button>
        {(scan || !user) && <div>
          <img src={ecg} alt="ecg"/>
            <p>Valori scannerizzati:</p>
            <List>
                {data.map((d, index) => <ListItem key={index}>{d}</ListItem>)}
            </List>
        </div>}
    </Container>
    )
}