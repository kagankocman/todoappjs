import React, { useState } from "react";
import { TodoApp } from "./components/TodoApp";
import "./App.css";
import { Todo } from "./classes/Todo";

const baseURL = process.env.REACT_APP_BASE_URL;

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    handleGetAll();
  }, []);

  const handleParseTodo = (value) => {
    const dbTodos = JSON.parse(value.result);
    const newTodos = dbTodos.map((_todo) => {
      const newTodo = new Todo(
        _todo.TodoTitle,
        _todo.Description,
        _todo.TodoId,
        _todo.TodoDeleted
      );
      return newTodo;
    });
    setTodos(newTodos);
  };

  const handleGetAll = async () => {
    setLoading(true);

    try {
      const url = `${baseURL}/GetAll`;
      const res = await fetch(url);
      const value = await res.json();
      handleParseTodo(value);
    } catch (error) {
      console.error("API isteği sırasında hata oluştu:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <TodoApp
        loading={loading}
        todos={todos}
        setLoading={setLoading}
        handleGetAll={handleGetAll}
      />
    </div>
  );
};

export default App;
