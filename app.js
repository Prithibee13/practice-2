import   express  from 'express';
import cors  from 'cors'
import dotenv from "dotenv";
import mongoose from 'mongoose'
import toDoRouter from './src/Routes/TodoRoutes.js';

const app = express();
dotenv.config();

const port = process.env.PORT || 8000;
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Practice server is running")
})

app.use('/todo', toDoRouter)


export default app