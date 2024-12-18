import React, { useState } from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 7;

  const indexOfFirstItem = currentPage * itemsPerPage;
  const indexOfLastItem = indexOfFirstItem + itemsPerPage;
  const currentItems = props.todos.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(props.todos.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="div-ul">
      <ul className="soft-table">
        {currentItems.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              loading={props.loading}
              setLoading={props.setLoading}
              handleGetAll={props.handleGetAll}
            />
          );
        })}
      </ul>
      <div className="pagination-controls">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
          className="pagination-button"
        >
          Önceki
        </button>
        <span>
          Sayfa {currentPage + 1} / {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
          className="pagination-button"
        >
          Sonraki
        </button>
      </div>
    </div>
  );
};
