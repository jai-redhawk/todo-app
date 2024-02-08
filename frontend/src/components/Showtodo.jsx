import { useState } from "react";

export function Showtodo({todos}){

    return(
        <>
        <div>
            {todos && todos.map((todo)=>{
               return(
               <div key={todo._id}>
                    <h2>{todo.title}</h2>
                    <h3>{todo.description}</h3>
                    <button>{todo.completed == true ? "completed": "mark as completed"}</button>
                </div>)
            })}
        </div>
        </>
    )
}