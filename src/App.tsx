import HeaderBar from "./components/HeaderBar/HeaderBar";
import { useState } from "react";
export default function App() {
  const [todos, setTodos] = useState<any>([]);
  function handleDelete(idx: number) {
    setTodos(todos.filter((obj: any) => obj.id !== idx));
  }
  function handleCompleted(idx: number) {
    // let completedTodo = todos[idx];
    // completedTodo.completed = !completedTodo.completed
    const updatedTodos = todos.map((obj: any) => {
      if (obj.id === idx) return { ...obj, completed: !obj.completed };
      return obj;
    });
    setTodos(updatedTodos);
  }
  function handleUpdate(idx: number) {
    const existingTodo = todos.filter((obj: any) => obj.id === idx);
    const todoUpdate = prompt("Whats the new todo?", existingTodo[0].title);
    const updatedTodos = todos.map((obj: any) => {
      if (obj.id === idx) return { ...obj, title: todoUpdate };
      return obj;
    });
    setTodos(updatedTodos);
  }
  return (
    <>
      <HeaderBar todos={todos} setTodos={setTodos} />
      {todos.length > 0 && (
        <ol>
          {todos.map((obj: any, idx: any) => {
            return (
              <li key={idx}>
                {obj.completed ? <del>{obj.title}</del> : <>{obj.title}</>}

                <button onClick={() => handleDelete(obj.id)}>Delete</button>
                <button onClick={() => handleCompleted(obj.id)}>
                  Completed
                </button>
                <button onClick={() => handleUpdate(obj.id)}>Update</button>
              </li>
            );
          })}
        </ol>
      )}
    </>
  );
}
