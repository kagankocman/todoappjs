import React from "react";
import { Button } from "./Button";

export const TodoAddButton = (props) => {
  return (
    <Button
      className="button-3"
      onClick={() => props.handleAddTodo(props.text, props.desc)}
    >
      Ekle
    </Button>
  );
};
