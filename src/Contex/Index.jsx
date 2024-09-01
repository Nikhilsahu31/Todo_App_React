import { createContext,useContext } from "react";

export  const TodoContex=createContext({
    todos:[
        {id:1,
        todo:"Learn React",
        completed:false}       
    ],
    addTodo:todo=>{},
    deleteTodo:id=>{},
    updateTodo:(id,todo)=>{},
    toggleComplete:(id)=>{} 
})
export  const UseTodo=()=>{
    return useContext(TodoContex)
}

export const TodoProvider=TodoContex.Provider