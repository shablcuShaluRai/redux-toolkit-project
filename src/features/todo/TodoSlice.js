import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: '',
  todoLists: []
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    updateText(state, action) {
      state.text = action.payload;
    },
    addListTodo(state, action) {
      state.todoLists.push(action?.payload);
    }
  }
});

export const { updateText, addListTodo } = todoSlice.actions;

export const selectTodoList = (state) => state.todo.todoLists;
export const selectText = (state) => state.todo.text;

export default todoSlice.reducer;
