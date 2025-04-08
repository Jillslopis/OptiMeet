import express from "express";
import {createServer} from "http";

import { Server} from "socket.io";

import mongoose from "mongoose";
import {connectToSocket} from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";


const app = express();
const server = createServer(app);
const io = connectToSocket(server);


app.set("port",(process.env.PORT || 8000))
app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({limit: "40kb",extended:true}));

app.use("/api/v1/users",userRoutes);



app.get("/home",(req,res) =>{
    return res.json({"hello": "world"})
});

const start = async() => {
    const connectionDb = await mongoose.connect("mongodb+srv://jillslopis08:7N9oFBFqEI7RIeUJ@optimeetcluster.wkwk2iy.mongodb.net/?retryWrites=true&w=majority&appName=OptiMeetCluster")
    console.log(`MONGO Connected DB Host : ${connectionDb.connection.host}`)
    server.listen(app.get("port"),()=>{
        console.log("LISTENING ON PORT 8000")
    });
}

start();