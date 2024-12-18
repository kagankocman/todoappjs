import React from "react";

export const ApiLoading = (props) => {
  if (!props.loading) {
    return <></>;
  }
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <div className="loading-text">Bekleyiniz...</div>
    </div>
  );
};
