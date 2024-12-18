import React from "react";

export const TodoTextArea = (props) => {
  return (
    <textarea
      className="soft-textarea"
      onKeyDown={props.handleKeyDown}
      value={props.text}
      onChange={props.handleTextChange}
      placeholder="*Yeni görev başlığı"
    ></textarea>
  );
};
