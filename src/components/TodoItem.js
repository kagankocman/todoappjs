import React from "react";
import { TodoText } from "./TodoText";
import { TodoUndeleteButton } from "./TodoUndeleteButton";
import { TodoUpdateButton } from "./TodoUpdateButton";
import { TodoRemoveButton } from "./TodoRemoveButton";
import { TodoDeleteButton } from "./TodoDeleteButton";

export const TodoItem = (props) => {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TodoText todo={props.todo} loading={props.loading} />

      <div style={{ display: "flex", marginLeft: "auto", gap: "10px" }}>
        <TodoUpdateButton
          todo={props.todo}
          loading={props.loading}
          setLoading={props.setLoading}
          handleGetAll={props.handleGetAll}
        />
        <TodoDeleteButton
          todo={props.todo}
          setLoading={props.setLoading}
          handleGetAll={props.handleGetAll}
        />

        <TodoUndeleteButton
          todo={props.todo}
          setLoading={props.setLoading}
          handleGetAll={props.handleGetAll}
        />

        <TodoRemoveButton
          todo={props.todo}
          setLoading={props.setLoading}
          handleGetAll={props.handleGetAll}
        />
      </div>
    </li>
  );
};
