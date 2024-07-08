import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import dotenv from 'dotenv'

const app = express();
dotenv.config()

app.use(cors())
app.use(express.json());

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("DB & Server Handshaked Success")
}).catch((err) => {
    console.log(err.message)
}) 

const server = app.listen(process.env.PORT , () => {
    console.log("hey server")
})