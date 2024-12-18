import React from "react";
import { Button } from "./Button";

const baseURL = process.env.REACT_APP_BASE_URL;

export const TodoUndeleteButton = (props) => {
  const handleUndeleteTodo = async (todo) => {
    props.setLoading(true);

    try {
      const url = `${baseURL}/Update?TodoId=${todo.id}`;

      await fetch(url, {
        method: "PATCH",
        body: JSON.stringify({
          TodoTitle: todo.value,
          TodoDescription: todo.desc,
          TodoId: todo.id,
          TodoDeleted: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Patch isteği sırasında hata oluştu:", error);
    } finally {
      await props.handleGetAll();
      props.setLoading(false);
    }
  };

  if (!props.todo.isDeleted) {
    return <></>;
  }
  return (
    <Button
      className="button-grey"
      onClick={() => handleUndeleteTodo(props.todo)}
    >
      Geri Al
    </Button>
  );
};
