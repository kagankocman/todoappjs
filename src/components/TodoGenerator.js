import React, { useState } from "react";
import { TodoTextArea } from "./TodoTextArea";
import { TodoDescArea } from "./TodoDescArea";
import { TodoAddButton } from "./TodoAddButton";
import { Todo } from "../classes/Todo";

const baseURL = process.env.REACT_APP_BASE_URL;

export const TodoGenarator = (props) => {
  const [text, setText] = useState("");
  const [desc, setDesc] = useState("");

  const handleAddTodo = async (text, desc) => {
    if (!text.trim()) return;

    try {
      const newTodo = new Todo(text, desc);
      const url = `${baseURL}/Insert`;
      props.setLoading(true);
      await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          TodoTitle: newTodo.value,
          TodoDescription: newTodo.desc,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Post isteği sırasında hata oluştu:", error);
    } finally {
      await props.handleGetAll();
      props.setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTodo(text, desc);
      setText("");
      setDesc("");
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  return (
    <div className="div-textarea">
      <TodoTextArea
        text={text}
        handleKeyDown={handleKeyDown}
        handleTextChange={handleTextChange}
      />
      <TodoDescArea
        desc={desc}
        handleKeyDown={handleKeyDown}
        handleDescChange={handleDescChange}
      />
      <TodoAddButton text={text} desc={desc} handleAddTodo={handleAddTodo} />
    </div>
  );
};
