import {
  updateText,
  selectTodoList,
  addListTodo,
  selectText
} from './TodoSlice';
import { useDispatch, useSelector } from 'react-redux';

const Todo = () => {
  const dispatch = useDispatch();
  const todoLists = useSelector(selectTodoList);
  const text = useSelector(selectText);

  const handleClick = () => {
    if (text.length > 0) {
      dispatch(addListTodo(text));
      dispatch(updateText(''));
    }
  };
  return (
    <div className="w-full flex flex-col items-center space-y-5">
      <h1 className="font-bold text-3xl text-red-600">TODO APP</h1>
      <div className="w-[50%] space-y-8 bg-white border-r-2 flex flex-col p-4 items-center shadow-2xl rounded-lg">
        <input
          className="w-full text-sm text-center font-semibold text-slate-600 border-b-2 border-red-400 outline-none px-4 pt-4"
          type="text"
          placeholder="What would you like to add?"
          value={text}
          onChange={(e) => dispatch(updateText(e.target.value))}
        />
        <button
          className="w-fit px-6 py-2 rounded bg-red-900 text-white drop-shadow-2xl"
          onClick={handleClick}
        >
          Add Todo
        </button>
      </div>
      {todoLists.length > 0 && (
        <div className="w-[50%] space-y-8 bg-white border-r-2 flex flex-col p-4 items-start overflow-y-scroll">
          <ul className="w-full">
            {todoLists?.map((todo) => (
              <li className="list-none py-2 font-semibold border-b-2 w-full">
                {todo}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Todo;
