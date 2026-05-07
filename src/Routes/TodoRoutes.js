import express from "express"
import { getTodo } from '../Controller/ToDoController.js'

const toDoRouter = express.Router();

toDoRouter.get('/', getTodo)

export default toDoRouter