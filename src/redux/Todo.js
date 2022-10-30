import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';


const todoSlice = createSlice ({
    name: 'todos' ,
    initialState:[{
        id: uuidv4(),
        description: "nkoum 6h30",
        isDone: true,
    },
    {
        id: uuidv4(),
        description: "nofter kbal 7h10",
        isDone: false,
    },
    {
        id: uuidv4(),
        description: "nousel fel waket",
        isDone: true,
    }],
    reducers:{

        //1ere function celle de l'ajout
        add: (state,action)=>{

            const newTask={
                id: uuidv4(),
                description: action.payload,
                isDone: false,
            }
            state.push(newTask)
        },


        //2eme function celle de delete
        delet:(state,action)=>{

            return state.filter((e)=> e.id !== action.payload)
        },

        //3eme function celle de toggel
        togueltodo:(state,action)=>{

            return state.map((e)=>{
                if(e.id === action.payload){
                    return { ...e, isDone : !e.isDone}
                } else {return e}
            })
        },
      


        //4eme function
        edittodo:(state,action)=>{

            const index = state.findIndex((e)=> e.id === action.payload)
            state[index].description = prompt('Test');
            
        },
    }
})

export const {add,delet,toggueltodo,edittodo} = todoSlice.actions;
export default todoSlice.reducer