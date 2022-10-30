import React from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch} from 'react-redux';
import {delet,toggueltodo,edittodo} from './redux/Todo'

function Task({todo}){
    console.log('todo2',todo)
    const Dispatch = useDispatch();
    const handelTogel=(id)=>{
        Dispatch(toggueltodo(id))
    }
    const handelDelet=(id)=>{
        Dispatch(delet(id))
    }
    const handelEdit=(id)=>{
        Dispatch(edittodo(id))
    }

    return (
        <div className="d-flex align-items-center justify-content-between mb-3">
            <div
            style={{flex: "1", padding: ".3em", border: "1px solid black", marginRight: "1em"}}>
            <div className="d-flex justify-content-between align-items-center">
                {todo.description}
                <input style={{width: "1.3em", height: "1.3em"}}
                type="checkbox" 
                onClick={()=>handelTogel(todo.id)}
                checked={todo.isDone}
                />
            </div>
            </div>

            <div className="d-flex" style={{ gap: "1em"}}>
                <Button variant="info" onClick={()=>handelEdit(todo.id)}>Edit</Button>
                <Button variant="warning" onClick={()=>handelDelet(todo.id)}>Delete</Button>
            </div>

            </div>
    )
}
export default Task