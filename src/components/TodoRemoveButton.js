import React from "react";
import { Button } from "./Button";

const baseURL = process.env.REACT_APP_BASE_URL;

export const TodoRemoveButton = (props) => {
  const handleRemoveTodo = async (todo) => {
    props.setLoading(true);

    try {
      const url = `${baseURL}/Delete?TodoId=${todo.id}`;

      await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Delete isteği sırasında hata oluştu:", error);
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
      className="button-33"
      onClick={() => handleRemoveTodo(props.todo)}
    >
      Kaldır
    </Button>
  );
};
