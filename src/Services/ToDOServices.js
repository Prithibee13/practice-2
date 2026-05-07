import { Todo } from "../Models/TodoModels.js"



export const getAllToDo = async() =>
{  
    return await Todo.find({})
} 