import React from "react";

export const TodoText = (props) => {
  return (
    <div
      style={{
        textDecoration: props.todo.isDeleted ? "line-through" : "",
        fontStyle: props.todo.isDeleted ? "italic" : "initial",
      }}
    >
      {props.todo.value}
    </div>
  );
};
