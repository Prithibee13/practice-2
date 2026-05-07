import mongoose from "mongoose";


const TodoSchema = new mongoose.Schema({
    userId : Number,
    id : Number,
    title : String,
    completed : Boolean
    
})

export const Todo = mongoose.model('todos', TodoSchema)