import React from "react";

export const TodoDescArea = (props) => {
  return (
    <textarea
      className="soft-descarea"
      onKeyDown={props.handleKeyDown}
      value={props.desc}
      onChange={props.handleDescChange}
      placeholder="Yeni görev açıklaması"
    ></textarea>
  );
};
