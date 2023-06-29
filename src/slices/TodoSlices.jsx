import { createSlice, current } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const { id, title } = action.payload;
            const todo = state.find((todo) => todo.id === id );
            if(todo){
                todo.title = title;
            }
        },
        updateFilterStatus: (state, action) => {
         return  action.payload === 'All' ? current(state) : state.filter(todo => todo.status === action.payload); 
        },
    },
});

export const { addTodo, deleteTodo, updateTodo, updateFilterStatus } = todoSlice.actions;
export default todoSlice.reducer;