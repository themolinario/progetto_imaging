import {MongoClient} from "mongodb";
import "colors";
import cors from 'cors';
import {SerialPort} from "serialport";
import {ReadlineParser} from "@serialport/parser-readline";
import express from "express";


const uri =  "mongodb+srv://marmolosco:dragonball@cybercare.xkpwssk.mongodb.net/";

const client = new MongoClient(uri);

async function init() {
    try {
        await client.connect();
        console.log('Connected to db!');
    } catch (e) {
        console.log(e);
    }
}

init().catch(console.dir);

const database = client.db('test');
const collection = database.collection('data');

const insert = async (data) => {
    try {
        await client.db('test').collection('data').insertOne({type: data.type, value: data.value, source: data.source, date: new Date(Date.now())});
        console.log('added ' + data.type.cyan + ': ' + data.value);
    } catch (e) {
        console.log(e);
    }
}

const port= new SerialPort({path: 'COM3', baudRate: 9600});
const parser = new ReadlineParser();
port.pipe(parser);
// Read the port data
port.on("open", () => {
    console.log('connected to arduino');
});
parser.on('data', async (data) => {
    if (data && typeof data === 'string') {
        const type = data.split(' : ')[0];
        const value = data.split(' : ')[1];
        if (value) {
            await insert({type, value});
        }
    }
});

const app = new express();
app.use(cors());

app.get('/data', async (req, res) => {
    try {
        const cursor = await collection.find({}).sort({date: -1}).limit(1);
        let array = []
        for await (const doc of cursor){
            array = [...array, doc];
        }
        return res.send(array);
    } catch (e) {
        console.log(e);
    }
});

app.listen(80, () => {
    console.log('listening on port 80');
});