import {app} from "./app"
require("dotenv").config();
import connectdb from "./utils/db";
import { v2 as cloudinary } from "cloudinary";
import { initSocketServer } from "./socketServer";
import http from "http";


const server = http.createServer(app);

// dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

initSocketServer(server);

server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
    connectdb();
})











//create server

