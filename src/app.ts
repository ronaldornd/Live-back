import express, { request, response } from "express";
import "dotenv/config";
import { router } from "./routes";
import { Server, Socket }from "socket.io";
import http from "http";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);




const serverHttp = http.createServer(app);
const io = new Server(serverHttp,{
    cors:{
        origin: "*",
    }
});


io.on("connection", socket =>{
    console.log('Usuário conectado')
})


app.get("/github", (request,response)=>{
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}`)
})

app.get("/signin/callback", (request,response)=>{
    const {code} = request.query;
    return response.json(code);
})


export{serverHttp, io}