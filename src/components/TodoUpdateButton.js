import React, { useState } from "react";
import { Button } from "./Button";

const baseURL = process.env.REACT_APP_BASE_URL;

export const TodoUpdateButton = (props) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [valueText, setValueText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");

  const handleUpdateTodo = async (valueText, descriptionText, todoId) => {
    if (valueText === null || !valueText.trim()) return;

    props.setLoading(true);

    try {
      const url = `${baseURL}/Update?TodoId=${todoId}`;
      await fetch(url, {
        method: "PATCH",
        body: JSON.stringify({
          TodoTitle: valueText,
          TodoDescription: descriptionText,
          TodoId: todoId,
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
      handleModalClose();
    }
  };

  const handleGetSelected = async (todo) => {
    const url = `${baseURL}/Get?TodoId=${todo.id}`;

    props.setLoading(true);

    try {
      const res = await fetch(url);
      const value = await res.json();
      const dbTodo = JSON.parse(value.result);
      setDescriptionText(dbTodo.TodoDescription);
      setValueText(dbTodo.TodoTitle);
    } catch (error) {
      console.error("API isteği sırasında hata oluştu:", error);
    } finally {
      props.setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleUpdateTodo(valueText, descriptionText, props.todo.id)
      setValueText("");
      setDescriptionText("");
    }
  };

  const handleClick = (todo) => {
    handleGetSelected(todo);
    setIsDescriptionOpen(true);
  };

  const handleModalClose = () => {
    setIsDescriptionOpen(false);
    setValueText("");
    setDescriptionText("");
  };

  if (props.todo.isDeleted) {
    return <></>;
  }

  return (
    <div>
      {isDescriptionOpen && !props.loading && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <label style={{ color: "ButtonText", fontWeight: "bold" }}>
              Görev başlığı
            </label>
            <textarea
              className="modal-textarea"
              value={valueText}
              onKeyDown={handleKeyDown}
              onChange={(e) => setValueText(e.target.value)}
            />
            <label style={{ color: "ButtonText", fontWeight: "bold" }}>
              Görev açıklaması
            </label>
            <textarea
              className="modal-textarea-desc"
              value={descriptionText}
              onKeyDown={handleKeyDown}
              onChange={(e) => setDescriptionText(e.target.value)}
            />
            <button
              className="modal-close-button"
              onClick={() => handleModalClose()}
            >
              x
            </button>
            <button
              className="modal-update-button"
              onClick={() =>
                handleUpdateTodo(valueText, descriptionText, props.todo.id)
              }
            >
              Güncelle
            </button>
          </div>
        </div>
      )}
      <Button className="button-grey" onClick={() => handleClick(props.todo)}>
        Güncelle
      </Button>
    </div>
  );
};
