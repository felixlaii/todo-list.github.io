import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t) => t.id === editTodo.id ? (t = { id: t.id, todo}) : {id: t.id, todo: t.id});
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }
  }
  return (
    <div className="App">
    </div>
  );
}

export default App;
