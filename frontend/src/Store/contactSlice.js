import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'

const conatctSlice = createSlice({
    name:"contact",
    initialState:[
        {
            id:uuidv4(),
            name:"firas",
            age:28,
            email:'firas@gmail.com'
        },
        {
            id:uuidv4(),
            name:"taher",
            age:32,
            email:'taher@gmail.com'
        }
    ],
    reducers:{
        setContact:(state,action)=>{
    return action.payload
    }
    }
})

export const {setContact} = conatctSlice.actions
export default conatctSlice.reducer