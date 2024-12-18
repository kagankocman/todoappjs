import React from "react";
import { ApiLoading } from "./ApiLoading";
import { TodoGetApiButton } from "./TodoGetApiButton";
import { TodoGenarator } from "./TodoGenerator";
import { TodoList } from "./TodoList";

export const TodoApp = (props) => {
  return (
    <>
      <ApiLoading loading={props.loading} />
      <TodoGetApiButton handleGetAll={props.handleGetAll} />
      <TodoGenarator
        setLoading={props.setLoading}
        handleGetAll={props.handleGetAll}
      />
      <TodoList
        todos={props.todos}
        loading={props.loading}
        setLoading={props.setLoading}
        handleGetAll={props.handleGetAll}
      />
    </>
  );
};
