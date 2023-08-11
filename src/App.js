import Todo from './features/todo/Todo';

function App() {
  return (
    <div className="box-border w-full h-screen">
      <div className="w-[800px] bg-red-800 mx-auto my-5 flex h-4/5 pb-8">
        <Todo />
      </div>
    </div>
  );
}

export default App;
