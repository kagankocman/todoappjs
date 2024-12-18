import React from "react";

export const TodoGetApiButton = (props) => {
  return (
    <div className="div-getapi">
      <button onClick={props.handleGetAll} className="button-19">
        <img
          alt="Görsel bulunamadı."
          src="https://img.icons8.com/?size=100&id=59872&format=png&color=000000"
          width={"20"}
          height={"20"}
        ></img>
      </button>
    </div>
  );
};
