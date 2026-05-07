import * as ToDoservice from "../Services/ToDOServices.js"



export const getTodo = async(req,res) =>
{
    const completedFillter = req.query.complete 
    const data = await ToDoservice.getAllToDo(completedFillter)
    res.send(data)
}