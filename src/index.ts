import express, { Request, Response } from 'express';
import os from "os";

const app = express();

const PORT = 8000;

//First Endpoint
app.get('/hello', (req:Request, res:Response) => {
    const name = req.query.name;

    if(!name) {
        return res.status(200).json({greeting:'Hello, World!'});
    }

    return res.status(200).json({greeting:`Hello, ${name}`});

})

//Second Endpoint
app.get('/info', (req:Request, res:Response) => {

    const info = {
        "time": new Date().toISOString(),
        "client_address": req.ip,
        "host_name": os.hostname(),
        "headers": req.headers
    }
    return res.status(200).json(info);

})


// Start the server
const server = app.listen(PORT, ()=>{
    console.log(`server is listening on port:${PORT}`);
});

export {app, server};