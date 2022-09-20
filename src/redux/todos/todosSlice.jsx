import { createSlice } from "@reduxjs/toolkit";


export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [
            {
                id: '1',
                title: 'Learn React'
            },
            {
                id: '2',
                title: 'Read a Book'  
            }
        ],
    },
    reducers:{
        addTodo: (state,action) =>{
            state.items.push({id:'3', title:'Test', completed:false})
        }
    },
});

export default todosSlice.reducer;
export const {addTodo} = todosSlice.actions;