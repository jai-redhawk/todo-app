// import { setDriver } from "mongoose";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Createtodo(){
    const [title, settitle]= useState('');
    const [description, setdescription]= useState('');
    const navigate= useNavigate();

    const handleSubmit= async(e)=>{
        e.preventDefault();
        try{
        await axios.post('http://localhost:3000/todo', {
            title: title,
            description: description
        });
        settitle('');
        setdescription('');

        alert('todo created successfully!');
    }
        catch(error){
            console.log('problem while creating a todo', error);
        }

    };

    const handleShowtodos= ()=>{
        navigate('/show');
    }

    return(
        <>
        <form onSubmit= {handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" value={title} onChange={(e)=> settitle(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="description">Description</label>
                <input type="text" name="description" value={description} onChange={(e)=> setdescription(e.target.value)}/>
            </div>
             <button type="submit">Submit</button>
             <button onClick={handleShowtodos}> show todos</button>

        </form>    
        </>
    )
}