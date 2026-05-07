import { Todo } from "../Models/TodoModels.js"



export const getAllToDo = async(complete) =>
{  
    return await Todo.find({completed : complete})
} 