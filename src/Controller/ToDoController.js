import * as ToDoservice from "../Services/ToDOServices.js"



export const getTodo = async(req,res) =>
{
    const data = await ToDoservice.getAllToDo()
    res.send(data)
}