import { useState } from "react";
export default function HeaderBar({
  todos,
  setTodos,
}: {
  todos: any;
  setTodos: any;
}) {
  const [newToDo, setNewToDo] = useState("");
  function handleNewToDoChange(e: any) {
    e.preventDefault();

    setNewToDo(e.target.value);
  }
  let newToDoWithId = {};

  function handleAddToDo() {
    if (!(newToDo.length > 0)) {
      alert("Add valid todo");
    } else {
      if (todos.length === 0)
        newToDoWithId = {
          id: 0,
          title: newToDo,
          completed: false,
        };
      else
        newToDoWithId = {
          id: todos[todos.length - 1].id + 1,
          title: newToDo,
          completed: false,
        };
      setTodos([...todos, newToDoWithId]);
      setNewToDo("");
    }
  }
  return (
    <>
      <input
        type="text"
        onChange={(e) => handleNewToDoChange(e)}
        value={newToDo}
      />
      <button onClick={() => handleAddToDo()}>Add To-Do</button>
    </>
  );
}
