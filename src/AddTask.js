import React, {useState} from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch, useSelector} from 'react-redux';
import {add} from './redux/Todo';
function AddTask(){
    const todo = useSelector((state)=>state.todos)
    console.log(todo);
    const Dispatch =useDispatch() 
    //ici tt d'abord nous devons recuperer les states de la barra de recherche
    const [input, setInput]=useState("")
    console.log(input);
    const handelAdd=()=>{
        Dispatch(add(input))
    }

        return (
            <div className="d-flex justify-content-center p-2 mb-3" style={{ gap: "1em" }}>
                <input placeholder="Enter your Task Here" onChange={(e)=>setInput(e.target.value)}></input>
                <Button variant="success" onClick={()=>handelAdd()}>Add Task</Button>
            </div>
        )
} 

export default AddTask