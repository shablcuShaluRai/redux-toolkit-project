import { useState } from 'react';
import {
  updateText,
  selectTodoList,
  addListTodo,
  selectText
} from './TodoSlice';
import { useDispatch, useSelector } from 'react-redux';

const Todo = () => {
  const todoLists = useSelector(selectTodoList);
  const text = useSelector(selectText);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>TODO APP</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => dispatch(updateText(e.target.value))}
      />
      <ul>
        {todoLists?.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
      <button onClick={() => dispatch(addListTodo(text))}>Add Todo</button>
    </div>
  );
};

export default Todo;
