import React from "react";
import { useSelector } from "react-redux";
import Task from './Task';


function ListTask(){
const todos =useSelector(state=>state.todos)
console.log ('todos',todos)
    return (
        <div>
            <ul className="List-group">

            {
                todos.map((el)=>(<Task todo={el} />))
            }

            </ul>
           {/* <Button onClick={()=>Sort (todos)} > Sort </Button> */}
        </div>
    )
}
export default ListTask