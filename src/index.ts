import express, { Request, Response } from 'express';

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
        "host_name": req.get('Host'),
        "headers": {
            "Accept": req.headers.accept,
            "User-Agent" : req.headers['user-agent']
        }
    }
    return res.status(200).json(info);

})


// Start the server
app.listen(PORT, ()=>{
    console.log(`server is listening on port:${PORT}`);
});

